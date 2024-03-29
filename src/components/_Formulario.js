import axios from "axios";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import './styles/formulario.css'
import '../App.css'

function Formulario(){
     
    const [ localidades, setLocalidades] = useState([])

    useEffect(() => {
        const getLocalidades = async() => {
            const result = await axios.get('https://apis.datos.gob.ar/georef/api/municipios?provincia=14&campos=id,nombre&max=500') 
                setLocalidades(result.data.municipios) 
            }
            getLocalidades()
        }, []);

        localidades.sort((a, b) => {
            if (a.nombre < b.nombre){
                return -1
            }
        })
    
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [tipodni, setTipodni] = useState('')
    const [dni, setDni] = useState('')
    const [telefono, setTelefono] = useState('')
    const [localidad, setLocalidad] = useState('')
    const [email, setEmail] = useState('')
    const [nombredenunciado, setNombredenunciado] = useState('')
    const [apellidodenunciado, setApellidodenunciado] = useState('')
    const [titulodenuncia, setTitulodenuncia] = useState('')
    const [tipoinfraccion, setTipoinfraccion] = useState('')
    const [descripcion, setDescripcion] = useState('')
    
    const registrarDenuncia = async(e) =>{
        e.preventDefault()
        e.target.reset()
        const nuevaDenuncia = {nombre, apellido, tipodni, dni, telefono, localidad, email, nombredenunciado, apellidodenunciado, tipoinfraccion, titulodenuncia, descripcion}
        await axios.post('http://localhost:4000/api/denuncias', nuevaDenuncia)
            .then(response => {
                console.log(response.data)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Denuncia guardada',
                    showConfirmButton: true,
                    confirmButtonText: 'Aceptar'
                  })
            })
                
            .catch(err => console.log(err))   
    }

    return (
        
        <div className="form-container">
            <form onSubmit={ registrarDenuncia }>

                <h4><b>Denunciante</b></h4>
                <div className="group mb-2">
                    <div className="group-container">
                        <label className="form-label">Nombre</label>
                        <input type='Text' className="form-input" required onChange={ e => setNombre(e.target.value) }/>
                    </div>
                    <div className="group-container"> 
                        <label className="form-label" >Apellido</label>
                        <input type='Text' className="form-input" required onChange={ e => setApellido(e.target.value) }/>
                    </div>

                    <div className="group-container">
                        <label className="form-label">Localidad</label>
                        <select className="select" onChange={ e => setLocalidad(e.target.value) }>
                            <option hidden defaultValue="0"/>
                            {localidades.map(localidad => (
                                <option key={localidad.id}>{localidad.nombre}</option>
                            ))}
                        </select> 
                    </div>
                </div>

                <div className="group-container"> 
                    <label className="form-label">Email</label>
                    <input type='Email' className="form-input w-100 mb-3" required placeholder="ejemplo@gmail.com" onChange={ e => setEmail(e.target.value) }/>
                </div>

                <h4><b>Denunciado</b></h4>
                <div className="group mb-2">
                    <div className="group-container">
                        <label className="form-label">Nombre</label>
                        <input type='Text' required className="form-input" onChange={ e => setNombredenunciado(e.target.value) }/>
                    </div>
                    <div className="group-container"> 
                        <label className="form-label" >Apellido</label>
                        <input type='Text' className="form-input" required onChange={ e => setApellidodenunciado(e.target.value) }/>
                    </div>
                    <div className="group-container w-100">
                        <label className="form-label">Tipo de Infracción</label>
                        <select className="select w-100" required onChange={ e => setTipoinfraccion(e.target.value) }>
                            <option hidden defaultValue="0"></option>
                            <option key="1">Ambiente</option>
                            <option key="2">Forestal</option>
                            <option key="3">Hídrico</option>        
                        </select> 
                    </div>
                </div>
                <div className="group mb-2">
                    <div className="group-container w-100">
                        <label className="form-label">Motivo</label>
                        <textarea className="w-100" required onChange={ e => setMotivo(e.target.value) }/>
                    </div>
                </div>

                <button type="Submit" className="btn btn-primary">Registrar</button>     

            </form>          
        </div>
    )
}

export default Formulario;




                    
                    
