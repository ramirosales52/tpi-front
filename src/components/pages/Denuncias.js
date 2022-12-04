import Dashboard from '../Dashboard';
import './styles/denuncias.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Box, Grid } from '@mui/material'

function Denuncias(){

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
        <div className="dashbody">
            <Dashboard />
            <div className="main">
                <div className='buscador'>
                    <h4>Denuncias totales:</h4>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <input type="text" className='form_input' placeholder='Buscar...'></input>
                            </Grid>
                            <Grid item xs={3}>
                                <select className='select w-100'>
                                <option hidden defaultValue="0">Filtrar</option>
                                <option key="1">Fecha</option>
                                <option key="2">Tipo</option>
                                <option key="3">Localidad</option>
                                </select>
                            </Grid>
                            <Grid item xs={2}>
                                <button className='btn btn-primary w-100'>Buscar</button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <div className='tableContainer'>
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
            </div>
        </div>
    )
}

export default Denuncias;