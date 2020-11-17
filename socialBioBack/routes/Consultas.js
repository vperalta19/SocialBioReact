//Imports
const express = require('express');
const router = express.Router();

const con = require('../Database');
//------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------//
//API INICIO
//----------------------------------------------------------------------------------------------------------------------------------------//

router.get('/inicio/:usuario', function(req,res){
    con.query('SELECT p.*, u.Nombre, u.Apellido, u.fotoPerfil FROM Publicaciones p, SyS s, Usuarios u WHERE s.seguidor = ? and s.seguido = p.usuario and p.usuario = u.usuario', 
                req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/inicio/:usuario/:seccion', function(req,res){
    var inicio = [req.params.usuario, req.params.seccion]
    con.query('SELECT p.*, u.Nombre, u.Apellido, u.fotoPerfil FROM Publicaciones p, SyS s, Usuarios u WHERE s.seguidor = ? and s.seguido = p.usuario and p.seccion = ? and p.usuario = u.usuario', inicio ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

//----------------------------------------------------------------------------------------------------------------------------------------//
//API EXPLORAR
//----------------------------------------------------------------------------------------------------------------------------------------//
router.get('/explorar', function(req,res){
    con.query('SELECT p.*, u.Nombre, u.Apellido, u.fotoPerfil FROM Publicaciones p, Usuarios u WHERE p.usuario = u.usuario, req.params.usuario' ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/explorar/:seccion', function(req,res){
    con.query('SELECT p.*, u.Nombre, u.Apellido, u.fotoPerfil FROM Publicaciones p, Usuarios u WHERE seccion = ? and p.usuario = u.usuario', req.params.seccion ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

//----------------------------------------------------------------------------------------------------------------------------------------//
//API INTERACCIONES
//----------------------------------------------------------------------------------------------------------------------------------------//

router.get('/likes/:idPublicacion', function(req,res){
    con.query('SELECT u.* FROM Likes l, Usuarios u WHERE publicacion = ? AND l.usuario = u.usuario', req.params.idPublicacion ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/cantLikes/:idPublicacion', function(req,res){
    con.query('SELECT COUNT(*) likes FROM Likes l, Usuarios u WHERE publicacion = ? AND l.usuario = u.usuario', req.params.idPublicacion ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/comentarios/:idPublicacion', function(req,res){
    con.query('SELECT c.comentario, u.usuario FROM Comentarios c, Usuarios u WHERE publicacion = ? AND c.usuario = u.usuario', req.params.idPublicacion ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/cantComentarios/:idPublicacion', function(req,res){
    con.query('SELECT COUNT(*) comentarios FROM Comentarios c, Usuarios u WHERE publicacion = ? AND c.usuario = u.usuario', req.params.idPublicacion ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/seguidores/:usuario', function(req,res){
    con.query('SELECT u.* FROM Usuarios u, SyS s WHERE s.seguido = ? and s.seguidor = u.usuario', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/seguidos/:usuario', function(req,res){
    con.query('SELECT u.* FROM Usuarios u, SyS s WHERE s.seguidor = ? and s.seguido = u.usuario', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/cantSeguidores/:usuario', function(req,res){
    con.query('SELECT COUNT(*) seguidores FROM Usuarios u, SyS s WHERE s.seguido = ? and s.seguidor = u.usuario', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/cantSeguidos/:usuario', function(req,res){
    con.query('SELECT COUNT(*) seguidos FROM Usuarios u, SyS s WHERE s.seguidor = ? and s.seguido = u.usuario', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/cantPublicaciones/:usuario', function(req,res){
    con.query('SELECT COUNT(*) publicaciones FROM Publicaciones WHERE usuario = ?', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

//----------------------------------------------------------------------------------------------------------------------------------------//
//API BUSQUEDA
//----------------------------------------------------------------------------------------------------------------------------------------//
router.get('/usuario/:usuario', function(req,res){
    con.query('SELECT *  FROM Usuarios WHERE usuario = ?', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

//----------------------------------------------------------------------------------------------------------------------------------------//
//API SUGERENCIAS
//----------------------------------------------------------------------------------------------------------------------------------------//
router.get('/popular', function(req,res){
    con.query('SELECT p.* FROM (SELECT COUNT(*) likes, p.idPublicaciones FROM Publicaciones p, Likes l WHERE p.idPublicaciones = l.publicacion GROUP BY p.idPublicaciones ORDER BY likes, p.fecha LIMIT 3) cant, Publicaciones p WHERE cant.idPublicaciones = p.idPublicaciones', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/sugerencias', function(req,res){
    con.query('SELECT * FROM Usuarios ORDER BY RAND() LIMIT 3', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

//----------------------------------------------------------------------------------------------------------------------------------------//
//API NOTIFICACIONES
//----------------------------------------------------------------------------------------------------------------------------------------//


router.get('/notificaciones', function(req,res){
    con.query('SELECT * FROM Notificaciones ORDER BY fecha' ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

//------------------------------------------------------------------------------------------------------------
module.exports = router;
