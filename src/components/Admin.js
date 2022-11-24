import './styles/admin.css'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react'
import Swal from 'sweetalert2'

function Admin(){

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    const iniciarSesion = (e) => {
        e.preventDefault()
        if (user === 'admin' && pass === 'admin'){
            navigate('/admin/dashboard/inicio')
        }else{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Contraseña o usuario incorrecto',
                showConfirmButton: true,
                confirmButtonText: 'Aceptar'
              })
        }
    }

    return(
        <div className="body">
            <Header />
                <div className='iniciosesion_container'>
                    <div className="iconcont">
                        <div className="circlediv">
                            <i className="fa-solid fa-user fa-3x icon" />
                        </div>
                    </div>
                    <form onSubmit={iniciarSesion}>
                        <div className="grupocontainer mb-2">
                            <label className='form-label'>Usuario</label>
                            <input type="text" className='form_input' required onChange={(e) => setUser(e.target.value)}/>
                        </div>
                        <div className="grupocontainer mb-3">
                            <label className='form-label'>Contraseña</label>
                            <input type="password" className='form_input' required onChange={(e) => setPass(e.target.value)}/>
                        </div>
                        <button className='btn btn-primary w-100' type='submit'>Ingresar</button>
                    </form>
                </div>
            <Footer />
        </div>
    )
}

export default Admin;
