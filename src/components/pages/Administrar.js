import Dashboard from '../Dashboard';
import './styles/administrar.css'
import { useState } from 'react'
import AdminModal from './adminModal';

function Administrar(){
    const [open, setOpen] = useState(false)

    return(
        <div className="dashbody">
            <Dashboard />
            <div className="main">
                
                <div className='adminContainer'>
                    <h3>Administrar información:</h3>
                    <hr/>
                    <div className='boxes'>
                        <div className='box' onClick={() => setOpen(true)}>
                            <h4>Tipo de denuncia</h4>
                        </div>
                        <div className='box'>
                            <h4>Localidad</h4>
                        </div>
                        <div className='box'>
                            <h4>Departamento</h4>
                        </div>
                        <div className='box'>
                            <h4>Tipo de documento</h4>
                        </div>
                        <div className='box'>
                            <h4>Informes</h4>
                        </div>
                    </div>
                </div>

                <AdminModal open={open} Close={() => setOpen(false)}/>
            </div>
        </div>
    )
}

export default Administrar;