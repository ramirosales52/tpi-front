import Dashboard from '../Dashboard';
import './styles/inicio.css'
import { Box, Grid } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Inicio(){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const fecha = date + '/' + month + '/' + year

    let id = 0

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
                <div className='inicioContainer'>
                    <div className='formCont'>
                        <h3>Bienvenido</h3>
                        <h6>Fecha: <b>25/11/2022</b></h6>
                        <div className='denunciasTotales mt-4 mb-4'>
                            <h5><b>Denuncias pendientes:</b></h5>
                            <h4>{denuncias.length}</h4>
                        </div>
                        <hr/>
                        <form>
                            <h5 className='title mb-3'>Datos del Inspector: </h5>
                            <Box sx={{ flowGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <div className='grupocontainer mb-2'>
                                            <label className='form-label'>Nombre</label>
                                            <input className='form_input' name='nombre'/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className='grupocontainer mb-2'>
                                            <label className='form-label'>Apellido</label>
                                            <input className='form_input' name='apellido'/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </form>
                        <hr/>
                        <div>
                            <div className='grupocontainer mb-2'>
                                <label className='form-label'>Generar informe</label>
                                <select className='select w-100 mt-2'>
                                    <option hidden defaultValue="0">Tipo de informe...</option>
                                </select>
                                <button className='btn btn-primary mt-3'>Generar</button>
                            </div>
                        </div>
                    </div>

                    <div className='denunciasdehoy'>
                        <h4>Denuncias pendientes:</h4>
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
                                    <td>{fecha}</td>
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
        </div>
    )
}

export default Inicio;