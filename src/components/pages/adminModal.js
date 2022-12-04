import './styles/modal.css'

function AdminModal(props) {
    if(!props.open) return null

    return(
        <>
            <div className='overlay'/>
            <div className="adminModalContainer">
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">Tipo</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Código</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <td>Forestal</td>
                            <td>Incendios</td>
                            <td>0001</td>
                            <td>
                                <div className='botones'>
                                    <button className='btn btn-secondary btn-sm'>Modificar</button>
                                    <button className='btn btn-outline-danger btn-sm'>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Ambiente</td>
                            <td>Daño en vegetación</td>
                            <td>0002</td>
                            <td>
                                <div className='botones'>
                                    <button className='btn btn-secondary btn-sm'>Modificar</button>
                                    <button className='btn btn-outline-danger btn-sm'>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td >Hídrico</td>
                            <td>Contaminación de ríos</td>
                            <td>0003</td>
                            <td>
                                <div className='botones'>
                                    <button className='btn btn-secondary btn-sm'>Modificar</button>
                                    <button className='btn btn-outline-danger btn-sm'>Eliminar</button>
                                </div>
                            </td>
                        </tr>          
                    </tbody>
                </table>
                <button className='btn btn-primary mb-3' style={{display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center'}}>Crear nuevo<i className="fa-solid fa-plus"/></button>
                <button className="btn btn-outline-danger" type="button" onClick={props.Close}>Cerrar</button>
            </div>
        </>
    )
}

export default AdminModal;