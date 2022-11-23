import './styles/estado-denuncias.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import Modal from './Modal'
import Header from './Header'
import Footer from './Footer'


function DenunciasPorEmail(email){
    
    const [denuncia, setDenuncia] = useState([])
    const [open, setOpen] = useState(false)

    const location = useLocation()

    let id = 0

    const getDenuncia = async(email, id) => {
        await axios.get('http://localhost:4000/api/denuncias/' + email + '/' + id)
            .then(res => {
                setDenuncia(res.data.value)
                setOpen(true)
            })
            .catch(err => console.log(err))
        }
        
       
    return(
        <div className='body'>
            <Header />
            <div className='denuncias-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">N°</th>
                            <th scope="col">Tipo de Denuncia</th>
                            <th scope="col">Localidad</th>
                            <th scope="col">Fecha</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {location.state.map(data => (
                        <tr key={id+=1}>
                            <th scope='row'>{id+=1}</th>
                            <td>{data.nombre}</td>
                            <td>{data.localidad}</td>
                            <td>{data.apellido}</td>
                            <td>
                                <div className="botones">
                                    <button className="btn btn-primary btn-sm" type='button' onClick={() => getDenuncia(data.email, data._id)}>Consultar</button>
                                    <button className="btn btn-secondary btn-sm">Modificar</button>
                                    <button className="btn btn-outline-danger btn-sm">Eliminar</button>
                                </div>
                            </td>
                        </tr>
                        ))} 
                    </tbody>
                </table>     

                <Modal open={open} Close={() => setOpen(false)} 
                    nombre={denuncia.nombre} 
                    apellido={denuncia.apellido}
                    localidad={denuncia.localidad}
                    nombredenunciado={denuncia.nombredenunciado}
                    apellidodenunciado={denuncia.apellidodenunciado}
                    tipoinfraccion={denuncia.tipoinfraccion}
                    motivo={denuncia.motivo}
                />     
            </div>
            <Footer />
        </div>  
    )
}

export default DenunciasPorEmail;