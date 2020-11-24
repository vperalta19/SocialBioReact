//Imports
const express = require('express');
const router = express.Router();

const con = require('../Database');
//------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------//
//API INICIO
//----------------------------------------------------------------------------------------------------------------------------------------//

router.get('/inicio/:usuario', function(req,res){
    con.query('SELECT p.*, u.nombre, u.apellido, u.fotoPerfil FROM Publicaciones p, SyS s, Usuarios u WHERE s.seguidor = ? and s.seguido = p.usuario and p.usuario = u.usuario ORDER BY fecha DESC', 
                req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/inicio/:usuario/:seccion', function(req,res){
    var inicio = [req.params.usuario, req.params.seccion]
    con.query('SELECT p.*, u.nombre, u.apellido, u.fotoPerfil FROM Publicaciones p, SyS s, Usuarios u WHERE s.seguidor = ? and s.seguido = p.usuario and p.seccion = ? and p.usuario = u.usuario ORDER BY fecha DESC' , inicio ,function(err,result){
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
    con.query('SELECT p.*, u.nombre, u.apellido, u.fotoPerfil FROM Publicaciones p, Usuarios u WHERE p.usuario = u.usuario ORDER BY fecha DESC', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/explorar/:seccion', function(req,res){
    con.query('SELECT p.*, u.nombre, u.apellido, u.fotoPerfil FROM Publicaciones p, Usuarios u WHERE seccion = ? and p.usuario = u.usuario ORDER BY fecha DESC', req.params.seccion ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})


//----------------------------------------------------------------------------------------------------------------------------------------//
//API PERFIL
//----------------------------------------------------------------------------------------------------------------------------------------//
router.get('/feed/:usuario', function(req,res){
    con.query('SELECT p.*, u.nombre, u.apellido, u.fotoPerfil FROM Publicaciones p, Usuarios u WHERE u.usuario = ? and p.usuario = u.usuario ORDER BY fecha DESC',req.params.usuario , function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/feed/:usuario/:seccion', function(req,res){
    var feed = [req.params.seccion, req.params.usuario]
    con.query('SELECT p.*, u.nombre, u.apellido, u.fotoPerfil FROM Publicaciones p, Usuarios u WHERE seccion = ? and p.usuario = u.usuario and u.usuario = ? ORDER BY fecha DESC',feed , function(err,result){
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

router.get('/isFollow/:seguidor/:seguido', function(req,res){
    con.query('SELECT * FROM SyS WHERE seguido = ? AND seguidor = ?;',[req.params.seguido, req.params.seguidor], function(err,filas, columnas){
        if(err){
            console.log(err)
            
        }
        else if(filas.length > 0){
            res.status(200)
            res.send(true);
        }
        else{
            res.status(404)
            res.send(false);
        }
        
    });
});

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
    con.query('SELECT p.*, u.nombre, u.apellido, u.fotoPerfil FROM (SELECT COUNT(*) likes, p.idPublicaciones FROM Publicaciones p, Likes l WHERE p.idPublicaciones = l.publicacion GROUP BY p.idPublicaciones ORDER BY likes, p.fecha LIMIT 2) cant, Publicaciones p, Usuarios u WHERE cant.idPublicaciones = p.idPublicaciones AND p.usuario = u.usuario', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

router.get('/sugerencias', function(req,res){
    con.query('SELECT * FROM Usuarios ORDER BY RAND() LIMIT 2',function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

//----------------------------------------------------------------------------------------------------------------------------------------//
//API NOTIFICACIONES
//----------------------------------------------------------------------------------------------------------------------------------------//


router.get('/notificaciones/:usuario', function(req,res){
    con.query('SELECT * FROM Notificaciones WHERE usuarioNotificacion = ? AND usuarioInteraccion != ? ORDER BY fecha',[req.params.usuario,req.params.usuario],function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

//------------------------------------------------------------------------------------------------------------
module.exports = router;
