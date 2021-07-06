//Imports
const express = require('express');
const router = express.Router();

const con = require('../Database');
const { cloudinary } = require('../services/img.service');
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
                registrar.email,
                'https://res.cloudinary.com/dai8fqtrr/image/upload/v1605900190/blnb06pe1astrzmnlhb0.jpg'
            ];
            con.query('INSERT INTO Usuarios (nombre, apellido, usuario, contraseña, email, fotoPerfil) VALUES (?,?,?,?,?,?)', usuarioArray, function(err,result){
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

router.put('/editarUsuario/', async function(req,res){
    var actualizar = req.body;
    con.query('SELECT usuario, email FROM Usuarios WHERE usuario = ?', actualizar.usuario, async function(err,row,field){
        if(err) {
            console.log('primer select',err)
        }
        else if (row.length === 0) {         
            res.status(404)                                          
            res.send('No existe el usuario')
        }
        else{
            if(actualizar.imagenCambiada) {
                try{
                    let uploadResponse = await cloudinary.uploader.upload(actualizar.fotoPerfil);
                    actualizar.fotoPerfil = uploadResponse.secure_url;
                }
                catch(err){
                    console.log('cloudinary',err)
                }
                
            }
            var usuarioArray = [
                actualizar.nombre,
                actualizar.apellido,
                actualizar.contraseña, 
                actualizar.biografia, 
                actualizar.fotoPerfil,
                actualizar.usuario
            ];
            con.query('UPDATE Usuarios SET nombre = ?, apellido = ?, contraseña = ?, biografia = ?, fotoPerfil = ? WHERE usuario = ?', usuarioArray, function(err,result){
                if(err){
                    res.status(400)    
                    console.log('sql',err)
                }
                res.status(200)    
                res.send('se actualizo correctamente');
            });
        }
    });
});

router.get('/usuarios/:usuario', (req,res) => {
    let usuario = req.params.usuario;
    let sql = 'SELECT * FROM Usuarios WHERE usuario = ?';
    con.query(sql,[usuario],function(err,result){
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