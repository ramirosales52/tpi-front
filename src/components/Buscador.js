import { useNavigate } from "react-router-dom";
import './styles/buscador.css'
import { useState } from 'react'
import axios from 'axios'
import Swal from "sweetalert2";

function Buscador(){

    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const verificarDenuncia = async (e) => {
        e.preventDefault()
        await axios.get('http://localhost:4000/api/denuncias/' + email)
            .then(res => {
                if(res.data.value.length == 0){
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Email no encontrado',
                        showConfirmButton: true,
                        confirmButtonText: 'Aceptar'
                    })
                } else {
                    navigate('/denuncias', {state: res.data.value})
                }
            })
            .catch(err => console.log(err))
        // navigate('/denuncias')
    }

    return(
        <div className='buscador-container'>
            <form onSubmit={verificarDenuncia}>
                <div className='group-container'>
                    <label className='form-label'>Ingrese su email</label>
                    <input type='Email' className='form-input w-100 mb-3' required placeholder='ejemplo@gmail.com' onChange={(e) => setEmail(e.target.value)}></input>        
                    <button type="Submit" className="btn btn-primary">Buscar</button>
                </div>
            </form>
        </div>
    )
}

export default Buscador;