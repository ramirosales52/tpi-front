import './styles/estado-denuncias.css'
import { useLocation } from 'react-router-dom'

function DenunciasPorEmail(email){
    
    const location = useLocation()
    let id = 0

    return(
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
                    <tr>
                        <th scope='row'>{id+=1}</th>
                        <td>{data.nombre}</td>
                        <td>{data.localidad}</td>
                        <td>{data.apellido}</td>
                        <td>
                            <div className="botones">
                                <button className="btn btn-primary btn-sm">Consultar</button>
                                <button className="btn btn-secondary btn-sm">Modificar</button>
                                <button className="btn btn-outline-danger btn-sm">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    ))} 
                </tbody>
            </table>
        </div>
    )
}

export default DenunciasPorEmail;