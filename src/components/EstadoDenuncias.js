import '../App.css'
import './styles/estado-denuncias.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function EstadoDenuncias(){
    let id = 0
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [denuncias, setDenuncias] = useState([])

    useEffect(() => {
        const getDenuncias = async() => {
            const result = await axios.get('http://localhost:4000/api/denuncias')
                setDenuncias(result.data)
        }
        getDenuncias()    
    },[])
    console.log(denuncias)

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
                    {denuncias.map(denuncia => (
                    <tr>
                        <th scope='row'>{id+=1}</th>
                        <td>{denuncia.tipoinfraccion}</td>
                        <td>{denuncia.localidad}</td>
                        <td>{date}</td>
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

export default EstadoDenuncias;