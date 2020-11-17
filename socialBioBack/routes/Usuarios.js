//Imports
const express = require('express');
const router = express.Router();

const con = require('../Database');
//------------------------------------------------------------------------------------------------------------
router.post('/registrar', function(req,res){
    var registrar = req.body;
    con.query('SELECT usuario, email FROM Usuarios WHERE usuario = ? OR email = ?', [registrar.usuario, registrar.email], function(err,row,field){
        if(err) {
            throw err;
        }
        else if (row.length > 0) {           
            res.status(400)                                            
            return res.send('ya existe el usuario')
        }
        else{
            var usuarioArray = [
                registrar.nombre, 
                registrar.apellido, 
                registrar.usuario, 
                registrar.contraseña,
                registrar.email
            ];
            con.query('INSERT INTO Usuarios (nombre, apellido, usuario, contraseña, email) VALUES (?,?,?,?,?)', usuarioArray, function(err,result){
                if(err){
                    res.status(401)    
                    throw err;
                }
                res.status(200)    
                res.send('cree el usuario: ' + result.insertId);
            });
        } 

     });
});

router.put('/editarUsuario/:usuario', function(req,res){
    var actualizar = req.body;
    var usuario = req.params.usuario;
    var usuarioArray = [
        actualizar.nombre,
        actualizar.apellido,
        actualizar.usuario, 
        actualizar.contraseña, 
        actualizar.biografia, 
        actualizar.fotoPerfil, 
        actualizar.email,
        usuario
    ];
    con.query('SELECT usuario, email FROM Usuarios WHERE usuario = ?', usuario, function(err,row,field){
        if(err) {
            throw err;
        }
        else if (row.length === 0) {         
            res.status(404)                                          
            res.send('No existe el usuario')
        }
        else{
            con.query('UPDATE Usuarios SET nombre = ?, apellido = ?,usuario = ?, contraseña = ?, biografia = ?, fotoPerfil = ?, email = ? WHERE usuario = ?', usuarioArray, function(err,result){
                if(err){
                    res.status(400)    
                    throw err;
                }
                res.status(200)    
                res.send('se actualizo correctamente');
            });
        }
    });
});

router.get('/usuarios/:id', (req,res) => {
    let idUser = parseInt(req.params.id);
    if(isNaN(idUser)){
        return response.send("DEBE INGRESAR UN NUMERO COMO PARAMETRO");
    }
    let sql = 'SELECT * FROM usuarios WHERE idUser = ?';
    con.query(sql,[idUser],function(err,result){
        if(err) throw err;
        else if(result.length == 0){
            res.status(404)  
            res.send('error')   
        }
        res.status(200)    
        res.send(result[0]);
    })
});


router.delete('/eliminarUsuario/:usuario', function(req,res){
    var {usuario} = req.params;
    console.log(usuario)
    con.query('DELETE FROM Usuarios WHERE usuario = ?', usuario, function(err,result){
        if(err) {
            res.status(404)    
            throw err
        }
        else {
            res.status(200)    
            res.send('eliminado correctamente')
        }
    });
    
});

router.post('/login', function(req,res){
    const {email} = req.body
    const {contraseña} = req.body
    con.query('SELECT * FROM Usuarios WHERE email = ? AND contraseña = ?',[email,contraseña],  function(err,result){
        if(err) {
            throw err;
        }
        else if(result.length!==0){
            res.status(200)
            res.send(result)
        }
        else{
            res.status(404)
            res.send('no existe el usuario')
        }
        
    });
});

// {
//     "nombre": "Juan",
//     "apellido": "Peres",
//     "email": "jperes@uade.edu.ar",
//     "usuario": "jperes",
//     "contraseña": "1234",
//     "fotoPerfil": "",
//     "biografia": ""
// }

//------------------------------------------------------------------------------------------------------------
module.exports = router;