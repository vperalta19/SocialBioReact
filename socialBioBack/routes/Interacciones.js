//Imports
const express = require('express');
const router = express.Router();

const con = require('../Database');
//------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------/
//API COMENTARIOS
//----------------------------------------------------------------------------------------------------------------------------------------/

router.post('/comentar', (req, res) => {
    var { comentario } = req.body;
    var { idPublicacion } = req.body;
    var { usuario } = req.body;
    if (comentario === "") {
        return res.send('Su comentario no puede estar vacio');
    }
    else {
        var comentarioArray = [
            comentario,
            idPublicacion,
            usuario,
        ];
        con.query('INSERT INTO Comentarios (comentario,publicacion,usuario, fecha) VALUES (?,?,?, NOW())', comentarioArray, function (err, result) {
            if (err) {
                console.log(err)
            }
            else {
                comentarioArray.shift();
                comentarioArray.push('comentario', result.insertId);
                res.send(notificacionesComentarios(comentarioArray));

                
            }
        });


    }
});

function notificacionesComentarios(notiArray){
con.query('SELECT usuario FROM Publicaciones WHERE idPublicaciones = ?', notiArray[0], function(err,row,field){
    if(err){
        console.log(err)
    }
    else{
        var usuarioNotificacion= row[0].usuario;

        notiArray.push(usuarioNotificacion)
        
        con.query('INSERT INTO Notificaciones (publicacion, usuarioInteraccion,interaccion,idInteraccion , usuarioNotificacion, fecha) VALUES (?,?,?,?,?,NOW())', notiArray, function(err,result){
            if(err){
                console.log(err)
            }
            else{
                con.query('UPDATE Publicaciones SET cantComentarios = cantComentarios + 1 WHERE usuario = ? AND idPublicaciones = ?',[usuarioNotificacion, notiArray[0]], function(err,result){
                    if(err){
                        console.log(err)
                    }
                    return true
                });
            }
        });
    }
    
});
}


router.delete('/eliminarComentario/:idComentario', function(req,res){
var comentario = req.params.idComentario;
con.query('DELETE FROM Comentarios WHERE idComentarios = ?', comentario, function(err,result){
    if(err){
        console.log(err)
    }
    
    con.query('SELECT usuarioNotificacion, publicacion FROM Notificaciones WHERE idInteraccion = ?',comentario, function(err,resultado){
        if(err){
            console.log(err)
        }
        con.query('UPDATE Publicaciones SET cantComentarios = cantComentarios - 1 WHERE usuario = ? AND idPublicaciones = ? AND interaccion = "comentario"',[resultado[0].usuarioNotificacion, resultado[0].publicacion], function(err,result){
            if(err){
                console.log(err)
            }
            con.query('DELETE FROM Notificaciones WHERE idInteraccion = ?', comentario, function(err,result){
                if(err){
                    console.log(err)
                }
                res.send('se actualizo correctamente');
            });
        });
    });
    
    
});
});

// {
//     "usuario": "jperes",
//     "comentario": "Lorem ipsum dolor sit amet consectetur adipiscing elit rhoncus",
//     "idPublicacion": "1"
// }


//----------------------------------------------------------------------------------------------------------------------------------------/
//API LIKE
//----------------------------------------------------------------------------------------------------------------------------------------/

router.post('/like', function(req,res){
    var like = req.body;
    var likeArray = [
        like.publicacion,
        like.usuario
    ];
    con.query('SELECT * FROM Likes WHERE publicacion = ? AND usuario = ?', likeArray , function(err,filas,columnas){
        if(err){
            console.log(err)
        }
        else if(filas.length > 0){
            const idLike = filas[0].idLikes
            con.query('DELETE FROM Likes WHERE publicacion = ? AND usuario = ?', likeArray, function(err,result){
                if(err){
                    console.log(err)
                }
                else{
                    con.query('SELECT usuarioNotificacion, publicacion FROM Notificaciones WHERE idInteraccion = ?',idLike, function(err,resultado){
                        if(err){
                            console.log(err)
                        }
                        con.query('UPDATE Publicaciones SET cantLikes = cantLikes - 1 WHERE usuario = ? AND idPublicaciones = ? ',[resultado[0].usuarioNotificacion, resultado[0].publicacion], function(err,result){
                            if(err){
                                console.log(err)
                            }
                            con.query('DELETE FROM Notificaciones WHERE idInteraccion = ?', idLike, function(err,result){
                                if(err){
                                    console.log(err)
                                }
                                res.status(200)
                                res.send('se actualizo correctamente');
                            });
                        });
                    });
                }
            });
        }
        else{
            con.query('INSERT INTO Likes (publicacion,usuario,fecha) VALUES (?,?,NOW())', likeArray, function(err,result){
                if(err){
                    console.log(err)
                }
                else{
                    likeArray.push('like', result.insertId)
                    res.status(200)
                    res.send(notificacionesLike(likeArray));
                }
            });
        }
        
    });

});

function notificacionesLike(notiArray){
    con.query('SELECT usuario FROM Publicaciones WHERE idPublicaciones = ?', notiArray[0], function(err,row,field){
        if(err){
            console.log(err)
        }
        else{
            var usuarioNotificacion= row[0].usuario;

            notiArray.push(usuarioNotificacion)
            
            con.query('INSERT INTO Notificaciones (publicacion, usuarioInteraccion,interaccion,idInteraccion , usuarioNotificacion, fecha) VALUES (?,?,?,?,?,NOW())', notiArray, function(err,result){
                if(err){
                    console.log(err)
                }
                else{
                    con.query('UPDATE Publicaciones SET cantLikes = cantLikes + 1 WHERE usuario = ? AND idPublicaciones = ?',[usuarioNotificacion, notiArray[0]], function(err,result){
                        if(err){
                            console.log(err)
                        }
                        
                        return true
                    });
                }
            });
        }
        
    });
}

router.get('/isLiked/:usuario/:publicacion', function(req,res){
    con.query('SELECT * FROM Likes WHERE usuario = ? AND publicacion = ?;',[req.params.usuario, req.params.publicacion], function(err,filas, columnas){
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

router.get('/likesDelUsuario/:usuario/', function(req,res){
    con.query('SELECT p.* FROM Publicaciones p ,Likes l where p.idPublicaciones = l.publicacion AND l.usuario = ?;',req.params.usuario , function(err,result){
        if(err){
            console.log(err)
        }
        res.send(result);
    });
})

// {
//     "usuario": "jperes",
//     "idPublicacion": "1"
// }


//----------------------------------------------------------------------------------------------------------------------------------------//
//API SEGUIR
//----------------------------------------------------------------------------------------------------------------------------------------//
router.post('/seguir/:seguidor/:seguido', function(req,res){
    var seguirArray = [
        req.params.seguidor,
        req.params.seguido
    ];
    con.query('SELECT * FROM SyS WHERE seguidor = ? AND seguido = ?' ,seguirArray, function(err,filas,columnas){
        if(err){
            console.log(err)
        }
        else if(filas.length > 0){
            con.query('DELETE FROM SyS WHERE seguidor = ? AND seguido = ?', seguirArray, function(err,result){
                if(err){
                    console.log(err)
                }
                else{
                    con.query('DELETE FROM Notificaciones WHERE usuarioInteraccion = ? AND usuarioNotificacion = ?', seguirArray, function(err,result){
                        if(err){
                            console.log(err)
                        }
                        res.send('se elimino correctamente');
                    });
                }
            });
        }
        else{
            con.query('INSERT INTO SyS (seguidor,seguido,fecha) VALUES (?,?,NOW())', seguirArray, function(err,result){
                if(err){
                    console.log(err)
                }
                else{
                    seguirArray.push('seguir')
                    con.query('INSERT INTO Notificaciones (usuarioInteraccion, usuarioNotificacion, interaccion, fecha) VALUES (?,?,?,NOW())', seguirArray, function(err,result){
                        if(err){
                            console.log(err)
                        }
                        else{
                            res.send('todo insertado')
                        }
                    });
                }
            });
        }
        
    });
});

router.delete('/dejarDeSeguir/:seguidor/:seguido', function(req,res){
var seguirArray = [
    req.params.seguidor,
    req.params.seguido
];
con.query('DELETE FROM SyS WHERE seguidor = ? AND seguido = ?', seguirArray, function(err,result){
    if(err){
        console.log(err)
    }
    else{
        con.query('DELETE FROM Notificaciones WHERE usuarioInteraccion = ? AND usuarioNotificacion = ?', seguirArray, function(err,result){
            if(err){
                console.log(err)
            }
            res.send('se elimino correctamente');
        });
    }
});
});


//------------------------------------------------------------------------------------------------------------
module.exports = router;