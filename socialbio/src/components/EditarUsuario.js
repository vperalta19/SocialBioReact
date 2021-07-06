import CloudinaryContext from 'cloudinary-react/lib/components/CloudinaryContext';
import Image from 'cloudinary-react/lib/components/Image';
import React from 'react';
import '../assets/css/EditarUsuario.css'
import { GlobalContext } from '../controllers/Context';
import { editarUsuario, getUsuario } from '../services/apiRoutes';

export default class EditarUsuario extends React.Component {
	static contextType = GlobalContext;
	constructor(props) {
		super(props);
		this.state = {
            nombre: '',
            apellido: '',
            usuario: '',
            contraseña: '',
            bio: '',
            imagen: '',
            fileInputState: '',
            previewSource: '',
            selectedFile: null,
            imagenCambiada: false
		}
	}

    handleFileInputChange = (e) => {
        const file = e.target.files[0];
        this.previewFile(file);
        this.setState({
          fileInputState: e.target.value,
          selectedFile: file
        })
      };
    
      previewFile = (file) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () => {
              this.setState({
                previewSource: reader.result,
                imagenCambiada: true
              })
          };
      };
    
      handleSubmitFile = (e) => {
          e.preventDefault();
          if (!this.state.selectedFile) {
            this.uploadImage('');
          }
          else{
            const reader = new FileReader();
            reader.readAsDataURL(this.state.selectedFile);
            reader.onloadend = () => {
                this.uploadImage(reader.result);
            };
          }
          
      };
    
      uploadImage = async (base64EncodedImage) => {
          try {
            const usuario = await this.context.UsuariosController.getUsuarioLogged()
            const user = usuario.usuario;
            const publicacion = {
              imagen: base64EncodedImage, 
              descripcion: this.state.descripcion, 
              usuario: user, 
              seccion: this.state.categoria
            }
            const validacion = await this.context.PublicacionController.publicar(publicacion)
            if(validacion){
              this.setState({
                alert:true,
                alertType:'success',
                alertDescript: 'Publicacion subida con exito'
              })
              setTimeout(() => {
                this.props.handleClose();
                window.location.reload()
              }, 2000);
            }
            else{
              this.setState({
                alert:true,
                alertType:'error',
                alertDescript: 'Error al subir la publicacion, recuerde que tiene que ingresar una descripcion y/o una imagen'
              })
            }
            
              
          } catch (err) {
              console.error(err);
          }
      };
    

	handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    
    async handleClick(){
        const usuario = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            contraseña: this.state.contraseña,
            biografia: this.state.bio,
            fotoPerfil: this.state.previewSource,
            usuario: this.state.usuario,
            imagenCambiada: this.state.imagenCambiada
        }
        const response = await editarUsuario(usuario)
        if(response.status === 200){
            const sesion = await getUsuario(this.state.usuario)
            sessionStorage.setItem('usuario', JSON.stringify(sesion))
            window.location.reload()
        }
    }


	async componentDidMount(){
        const usuario = this.props.usuario
        
        this.setState({
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            usuario: usuario.usuario,
            previewSource: usuario.fotoPerfil,
            bio: usuario.biografia,
            contraseña: usuario.contraseña
        })
	}

	render() {
		
		return (
			<div className='floating-container editarUsuario'>
				<div className='row'>
                    <div className='col text-center'>
                        {(() => {
                            if (!this.state.imagenCambiada){
                                return (
                                    <CloudinaryContext cloudName="dai8fqtrr">
                                        <Image publicId={this.state.previewSource} secure="true" className='avatar' alt='imagen de perfil'/>
                                    </CloudinaryContext>
                                )
                            }
                            else{
                                return (
                                    <img src={this.state.previewSource} alt='imagen' className='avatar'></img>
                                )
                            }
                        })()}
                        
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <input
                            id='subirImagen'
                            type="file"
                            name="image"
                            onChange={this.handleFileInputChange}
                            value={this.state.fileInputState}
                            className="subirImagen"
                            />
                        </div>
                        <div className='row'>
                            <input type='text' placeholder='Nombre' className='editarInput' value={this.state.nombre} name='nombre' onChange={this.handleChange}></input>
                        </div>
                        <div className='row'>
                            <input type='text' placeholder='Apellido' className='editarInput' value={this.state.apellido} name='apellido' onChange={this.handleChange}></input>
                        </div>
                        <div className='row'>
                            <input type='password' placeholder='contraseña' className='editarInput' value={this.state.contraseña} name='contraseña' onChange={this.handleChange}></input>
                        </div>
                        
                        <div className='row'>
                            <textarea type='text' placeholder='Biografía' className='editarInput' value={this.state.bio} name='bio' onChange={this.handleChange}></textarea>
                        </div> 
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-right'>
                        <button className='btnNaranja confirmar' onClick={this.handleClick.bind(this)}>Confirmar</button>
                    </div>
                    
                </div>
			</div>
		);
	}
}