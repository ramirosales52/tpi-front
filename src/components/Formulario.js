import './styles/formulario.css'
import '../App.css'
import { useState, useEffect } from 'react'
import { Stepper, Step, StepLabel, Box, Grid } from '@mui/material'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'

function Formulario(){

    const [page, setPage] = useState(1)    
    const [ localidades, setLocalidades] = useState([])

    const [form, setForm] = useState({
        
    })
    
    const [steperror, setSteperror] = useState(false)

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
    
    // const next = () => {
    //     if (form.nombre === "" ||
    //         form.apellido === "" ||
    //         form.tipodni === "" ||
    //         form.dni === "" ||
    //         form.email === "" ||
    //         form.localidad === "" ||
    //         form.codarea === "" ||
    //         form.tel === "" ) {
    //             setSteperror(true)
    //         } else {
    //             setSteperror(false)
    //             setPage(page + 1)
    //         }
    // };

    const setData = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div className="body">
            <Header />
            <div className="form-container">
                <div className="stepper">
                               
                    <Box sx={{ width: '100%' }}>
                        <Stepper alternativeLabel activeStep={page-1}>
                            <Step>
                                <StepLabel error={steperror}>Denunciante</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Denunciado</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Denuncia</StepLabel>
                            </Step>
                        </Stepper>
                    </Box>

                </div>
                <hr/>
                <div className='formcontainer'>
                    <form>
                        {/* ----- PAGINA 1 /denunciante/ ----- */}
                        {page === 1 ? (
                            <div className='denunciante'>
                                <h5 className='title mb-3'>Datos del Denunciante:</h5>
                                
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <div className='checkbox_container'>
                                                <label className='form-label'>Denuncia Anónima</label>
                                                <input type="checkbox"/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className='grupocontainer mb-2'>
                                                <label className='form-label'>Nombre</label>
                                                <input className='form_input' name='nombre' onChange={ setData }/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className='grupocontainer mb-2'>
                                                <label className='form-label'>Apellido</label>
                                                <input className='form_input' name='apellido' onChange={ setData }/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <div className='grupocontainer'>
                                                <label className='form-label'>Tipo doc.</label>
                                                <select className='select w-100' style={{height: '38px'}} name='tipodni' onChange={ setData }>
                                                    <option hidden defaultValue="0"></option>
                                                    <option>DNI</option>
                                                    <option>PAS</option>
                                                    <option>CDI</option>
                                                    <option>LE</option>
                                                    <option>LC</option>
                                                </select>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div className='grupocontainer'>
                                                <label className='form-label'>N° Documento</label>
                                                <input className='form_input' name='dni' type='Number' onChange={ setData }/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <div className='grupocontainer'>
                                                <label className='form-label'>Cod. Área</label>
                                                <input className='form_input' name='codarea' type='Number' onChange={ setData }/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div className='grupocontainer'>
                                                <label className='form-label'>Tel. Celular</label>
                                                <input className='form_input' name='tel' type='Tel' onChange={ setData }/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <div className='grupocontainer'>
                                                <label className='form-label'>Email</label>
                                                <input className='form_input' name='email' placeholder='ejemplo@gmail.com' onChange={ setData }/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div className='grupocontainer'>
                                                <label className='form-label'>Localidad</label>
                                                <select className="select w-100" style={{height: '38px'}} name='localidad' onChange={ setData }>
                                                    <option hidden defaultValue="0"/>
                                                    {localidades.map(localidad => (
                                                        <option key={localidad.id}>{localidad.nombre}</option>
                                                    ))}
                                                </select> 
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </div>
                        ): null}

                        {/* ----- PAGINA 2 /denunciado/ ----- */}
                        {page === 2 ? (
                            <div className='denunciado'>
                                <text className='title'>Denunciado</text>
                            <div className='group-container'>

                            </div>
                        </div>
                        ): null}
                        
                        {/* ----- PAGINA 3 /denuncia/ ----- */}
                        {page === 3 ? (
                            <div className='denuncia'>
                                <h5 className='title'>Datos de la Denuncia:</h5>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={8}>
                                            <div className='grupocontainer' >
                                                <label className='form-label'>Título</label>
                                                <input type="text" className='form_input'/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div className='grupocontainer'>
                                                <label className="form-label">Tipo de Infracción</label>
                                                <select className="select w-100" style={{height: '38px'}} required onChange={ setData }>
                                                    <option hidden defaultValue="0"></option>
                                                    <option key="1">Ambiente</option>
                                                    <option key="2">Forestal</option>
                                                    <option key="3">Hídrico</option>        
                                                </select> 
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className='grupocontainer'>
                                                <label className='form-label'>Descripción</label>
                                                <textarea name="descripcion" className='form-textarea w-100'></textarea>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div className='grupocontainer'>
                                                <label className='form-label'>Archivos Multimedia</label>
                                                <label className='dropzone' style={{cursor: "pointer"}}>
                                                    <i className="fa-solid fa-upload fa-2x mb-1" style={{color: "black", opacity: ".4"}}></i>
                                                    Arrastrá o seleccioná un archivo...
                                                    <input type="file" />
                                                </label>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Box> 

                                {/* <button type='Submit' className='btn btn-primary'>Registrar</button> */}

                            </div>
                        ): null}
                    </form>

                    <div className='buttons'>
                        <button className="button secundary" type='Submit' onClick={() => setPage(page - 1)} disabled={page < 2}>Atrás</button>
                        <button className="button primary" type='Submit' onClick={() => setPage(page + 1)} disabled={page > 2}>Siguiente</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Formulario;
