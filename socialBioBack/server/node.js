var mysql = require('mysql');

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors());

const path  = require('path')
const  publicDirectory = path.join(__dirname, '../public/')
app.use(express.static(publicDirectory));

var con = mysql.createConnection({
    host: 'db4free.net',
    user: 'socialbio',
    password: 'uade2020',
    database: 'socialbio'
});

con.connect(function(err){
    if(err) throw err;

    app.listen(5000, function(err){
        if(err) throw err;
    });
});

//----------------------------------------------------------------------------------------------------------------------------------------/
//API USUARIO
//----------------------------------------------------------------------------------------------------------------------------------------/
app.post('/registrar', function(req,res){
    var registrar = req.body;
    con.query('SELECT usuario, email FROM Usuarios WHERE usuario = ? OR email = ?', [registrar.usuario, registrar.email], function(err,row,field){
        if(err) {
            throw err;
        }
        else if (row.length > 0) {                                                   
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
                    throw err;
                }
                res.send('cree el usuario: ' + result.insertId);
            });
        } 

     });
});

app.put('/editarUsuario/:usuario', function(req,res){
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
            res.send('No existe el usuario')
        }
        else{
            con.query('UPDATE Usuarios SET nombre = ?, apellido = ?,usuario = ?, contraseña = ?, biografia = ?, fotoPerfil = ?, email = ? WHERE usuario = ?', usuarioArray, function(err,result){
                if(err){
                    throw err;
                }
                res.send('se actualizo correctamente');
            });
        }
    });
});


app.delete('/eliminarUsuario/:usuario', function(req,res){
    var {usuario} = req.params;
    console.log(usuario)
    con.query('DELETE FROM Usuarios WHERE usuario = ?', usuario, function(err,result){
        if(err) {throw err}
        else {res.send('eliminado correctamente')}
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


//----------------------------------------------------------------------------------------------------------------------------------------//
//API PUBLICACIONES
//----------------------------------------------------------------------------------------------------------------------------------------//
app.post('/publicar', function(req,res){
    var publicar = req.body;
    if(publicar.descripcion === "" && publicar.imagen === ""){
        return res.send('Debe agregar contenido a su publicacion');
    }
    else if(publicar.descripcion.length > 255){
        return res.send('Muy largo');
    }
    else{
        var publicacionArray = [
            publicar.seccion,
            publicar.descripcion,
            publicar.imagen,
            publicar.usuario
        ];
        con.query('INSERT INTO Publicaciones (seccion,descripcion,imagen,usuario,fecha) VALUES (?,?,?,?,NOW())', publicacionArray, function(err,result){
            if(err){
                throw err;
            }
            res.send('publicacion insertada correctamente');
        });
    } 
});

app.put('/editarPublicacion/:idPublicacion', function(req,res){
    var actualizar = [req.body.descripcion, req.body.seccion, req.params.idPublicacion];
    con.query('UPDATE Publicaciones SET descripcion = ?, seccion = ? WHERE idPublicaciones = ?', actualizar, function(err,result){
        if(err){
            throw err;
        }
        res.send('se actualizo correctamente');
    });
});

app.delete('/eliminarPublicacion/:idPublicacion', function(req,res){
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


//----------------------------------------------------------------------------------------------------------------------------------------/
//API COMENTARIOS
//----------------------------------------------------------------------------------------------------------------------------------------/

app.post('/comentar', function(req,res){
    var {comentario} = req.body;
    var {idPublicacion} = req.body;
    var {usuario} = req.body;
    if(comentario === ""){
        return res.send('Su comentario no puede estar vacio');
    }
    else{
        var comentarioArray = [
            comentario,
            idPublicacion,
            usuario,
        ];
        con.query('INSERT INTO Comentarios (comentario,publicacion,usuario, fecha) VALUES (?,?,?, NOW())', comentarioArray, function(err,result){
            if(err){
                throw err;
            }
            else{
                comentarioArray.shift();
                comentarioArray.push('comentario',result.insertId);
                res.send(notificaciones(comentarioArray));
            }
        })
        
        
    } 
});

app.delete('/eliminarComentario/:idComentario', function(req,res){
    var comentario = req.params.idComentario;
    con.query('DELETE FROM Comentarios WHERE idComentarios = ?', comentario, function(err,result){
        if(err){
            throw err;
        }
        con.query('DELETE FROM Notificaciones WHERE idInteraccion = ?', comentario, function(err,result){
            if(err){
                throw err;
            }
            res.send('se elimino correctamente');
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

app.post('/like', function(req,res){
    var like = req.body;
    var likeArray = [
        like.idPublicacion,
        like.usuario
    ];
    con.query('SELECT * FROM Likes WHERE publicacion = ? AND usuario = ?', likeArray , function(err,filas,columnas){
        if(err){
            throw err;
        }
        else if(filas.length > 0){
            res.send('ya existe ese like')
        }
        else{
            con.query('INSERT INTO Likes (publicacion,usuario,fecha) VALUES (?,?,NOW())', likeArray, function(err,result){
                if(err){
                    throw err;
                }
                else{
                    likeArray.push('like', result.insertId)
                    res.send(notificaciones(likeArray));
                }
            });
        }
        
    });
    
});

app.delete('/dislike/:idLike', function(req,res){
    con.query('DELETE FROM Likes WHERE idLikes = ?', req.params.idLike, function(err,result){
        if(err){
            throw err;
        }
        else{
            con.query('DELETE FROM Notificaciones WHERE idInteraccion = ?', req.params.idLike, function(err,result){
                if(err){
                    throw err;
                }
                res.send('se elimino correctamente');
            });
        }
    });
});

// {
//     "usuario": "jperes",
//     "idPublicacion": "1"
// }


//----------------------------------------------------------------------------------------------------------------------------------------//
//API SEGUIR
//----------------------------------------------------------------------------------------------------------------------------------------//
app.post('/seguir/:seguidor/:seguido', function(req,res){
    var seguirArray = [
        req.params.seguidor,
        req.params.seguido
    ];
    con.query('SELECT * FROM SyS WHERE seguidor = ? AND seguido = ?' ,seguirArray, function(err,filas,columnas){
        if(err){
            throw err;
        }
        else if(filas.length > 0){
            res.send('ya los sigue');
        }
        else{
            con.query('INSERT INTO SyS (seguidor,seguido,fecha) VALUES (?,?,NOW())', seguirArray, function(err,result){
                if(err){
                    throw err;
                }
                else{
                    seguirArray.push('seguir')
                    con.query('INSERT INTO Notificaciones (usuarioInteraccion, usuarioNotificacion, interaccion, fecha) VALUES (?,?,?,NOW())', seguirArray, function(err,result){
                        if(err){
                            throw err;
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

app.delete('/dejarDeSeguir/:seguidor/:seguido', function(req,res){
    var seguirArray = [
        req.params.seguidor,
        req.params.seguido
    ];
    con.query('DELETE FROM SyS WHERE seguidor = ? AND seguido = ?', seguirArray, function(err,result){
        if(err){
            throw err;
        }
        else{
            con.query('DELETE FROM Notificaciones WHERE usuarioInteraccion = ? AND usuarioNotificacion = ?', seguirArray, function(err,result){
                if(err){
                    throw err;
                }
                res.send('se elimino correctamente');
            });
        }
    });
});


//----------------------------------------------------------------------------------------------------------------------------------------//
//API PERFIL
//----------------------------------------------------------------------------------------------------------------------------------------//
app.get('/publicacionesDelUsuario/:usuario', function(req,res){
    con.query('SELECT * FROM Publicaciones WHERE usuario = ?',req.params.usuario , function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

app.get('/publicacionesDelUsuarioPorSeccion/:usuario/:seccion', function(req,res){
    var feed = [req.params.usuario, req.params.seccion]
    con.query('SELECT * FROM Publicaciones WHERE usuario = ? AND seccion = ?',feed , function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

app.get('/likesDelUsuario/:usuario/', function(req,res){
    con.query('SELECT p.* FROM Publicaciones p ,Likes l where p.idPublicaciones = l.publicacion AND l.usuario = ?;',req.params.usuario , function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

//----------------------------------------------------------------------------------------------------------------------------------------//
//API INICIO
//----------------------------------------------------------------------------------------------------------------------------------------//
app.get('/inicio/:usuario', function(req,res){
    con.query('SELECT p.* FROM Publicaciones p, SyS s WHERE s.seguidor = ? and s.seguido = p.usuario', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

app.get('/inicio/:usuario/:seccion', function(req,res){
    var inicio = [req.params.usuario, req.params.seccion]
    con.query('SELECT p.* FROM Publicaciones p, SyS s WHERE s.seguidor = ? and s.seguido = p.usuario and p.seccion = ?', inicio ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

//----------------------------------------------------------------------------------------------------------------------------------------//
//API EXPLORAR
//----------------------------------------------------------------------------------------------------------------------------------------//
app.get('/explorar', function(req,res){
    con.query('SELECT * FROM Publicaciones', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

app.get('/explorar/:seccion', function(req,res){
    con.query('SELECT * FROM Publicaciones WHERE seccion = ?', req.params.seccion ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

//----------------------------------------------------------------------------------------------------------------------------------------//
//API INTERACCIONES
//----------------------------------------------------------------------------------------------------------------------------------------//

app.get('/likes/:idPublicacion', function(req,res){
    con.query('SELECT u.* FROM Likes l, Usuarios u WHERE publicacion = ? AND l.usuario = u.usuario', req.params.idPublicacion ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

app.get('/cantLikes/:idPublicacion', function(req,res){
    con.query('SELECT COUNT(*) likes FROM Likes l, Usuarios u WHERE publicacion = ? AND l.usuario = u.usuario', req.params.idPublicacion ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

app.get('/comentarios/:idPublicacion', function(req,res){
    con.query('SELECT c.comentario, u.usuario FROM Comentarios c, Usuarios u WHERE publicacion = ? AND c.usuario = u.usuario', req.params.idPublicacion ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

app.get('/cantComentarios/:idPublicacion', function(req,res){
    con.query('SELECT COUNT(*) comentarios FROM Comentarios c, Usuarios u WHERE publicacion = ? AND c.usuario = u.usuario', req.params.idPublicacion ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

app.get('/seguidores/:usuario', function(req,res){
    con.query('SELECT u.* FROM Usuarios u, SyS s WHERE s.seguido = ? and s.seguidor = u.usuario', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

app.get('/seguidos/:usuario', function(req,res){
    con.query('SELECT u.* FROM Usuarios u, SyS s WHERE s.seguidor = ? and s.seguido = u.usuario', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

app.get('/cantSeguidores/:usuario', function(req,res){
    con.query('SELECT COUNT(*) seguidores FROM Usuarios u, SyS s WHERE s.seguido = ? and s.seguidor = u.usuario', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

app.get('/cantSeguidos/:usuario', function(req,res){
    con.query('SELECT COUNT(*) seguidos FROM Usuarios u, SyS s WHERE s.seguidor = ? and s.seguido = u.usuario', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

app.get('/cantPublicaciones/:usuario', function(req,res){
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
app.get('/usuario/:usuario', function(req,res){
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
app.get('/popular', function(req,res){
    con.query('SELECT p.* FROM (SELECT COUNT(*) likes, p.idPublicaciones FROM Publicaciones p, Likes l WHERE p.idPublicaciones = l.publicacion GROUP BY p.idPublicaciones ORDER BY likes, p.fecha LIMIT 3) cant, Publicaciones p WHERE cant.idPublicaciones = p.idPublicaciones', req.params.usuario ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})

app.get('/sugerencias', function(req,res){
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
function notificaciones(notiArray){
    con.query('SELECT usuario FROM Publicaciones WHERE idPublicaciones = ?', notiArray[0], function(err,row,field){
        if(err){
            throw err;
        }
        else{
            var usuarioNotificacion= row[0].usuario;

            notiArray.push(usuarioNotificacion)
            
            con.query('INSERT INTO Notificaciones (publicacion, usuarioInteraccion,interaccion,idInteraccion , usuarioNotificacion, fecha) VALUES (?,?,?,?,?,NOW())', notiArray, function(err,result){
                if(err){
                    throw err;
                }
                else{
                    return true;
                }
            });
        }
        
    });
}

app.get('/notificaciones', function(req,res){
    con.query('SELECT * FROM Notificaciones ORDER BY fecha' ,function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
})
