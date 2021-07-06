//Imports
const express = require('express');
const router = express.Router();

const con = require('../Database');
const { cloudinary } = require('../services/img.service');
//------------------------------------------------------------------------------------------------------------

router.post('/publicar', async function(req,res){
    var publicar = req.body;
    if(publicar.descripcion === "" && publicar.imagen === ""){
        return res.send('Debe agregar contenido a su publicacion');
    }
    else if(publicar.descripcion.length > 255){
        return res.send('Muy largo');
    }
    else{
        var link = ''
        if(!!publicar.imagen || !!publicar.imagen.length) {
            let uploadResponse = await cloudinary.uploader.upload(publicar.imagen);
            link = uploadResponse.secure_url;
        }
        var publicacionArray = [
            publicar.seccion,
            publicar.descripcion,
            link,
            publicar.usuario
        ];
        con.query('INSERT INTO Publicaciones (seccion,descripcion,imagen,usuario,fecha,cantComentarios,cantLikes) VALUES (?,?,?,?,NOW(),"0","0")', publicacionArray, function(err,result){
            if(err){
                throw err;
            }
            res.status(200)
            res.send('publicacion insertada correctamente');
        });
    } 
});

router.put('/editarPublicacion/:idPublicacion', function(req,res){
    var actualizar = [req.body.descripcion, req.body.seccion, req.params.idPublicacion];
    con.query('UPDATE Publicaciones SET descripcion = ?, seccion = ? WHERE idPublicaciones = ?', actualizar, function(err,result){
        if(err){
            throw err;
        }
        res.send('se actualizo correctamente');
    });
});

router.delete('/eliminarPublicacion/:idPublicacion', function(req,res){
    var publicacion = req.params.idPublicacion;
    con.query('DELETE FROM Publicaciones WHERE idPublicaciones = ?', publicacion, function(err,result){
        if(err){
            throw err;
        }
        res.send('se elimino correctamente');
    });
    
});

// {
//     "seccion": "tips",
//     "descripcion": "Lorem ipsum dolor sit amet consectetur adipiscing elit rhoncus",
//     "imagen": "",
//     "usuario": "jperes"
// }



//------------------------------------------------------------------------------------------------------------
module.exports = router;