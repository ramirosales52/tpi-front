import './styles/modal.css'

function Modal(props) {
    if(!props.open) return null

    return(
        <>
            <div className='overlay'/>
            <div className="modal-container">
                <h5><b>Denuncia N°</b> 1 </h5>
                <hr/>
                <p><b>Denunciante:</b></p>
                <div className='grupotexto'>
                    <p>Fecha y hora</p>
                    <p><b>{props.fecha.split('T')[0].split('-')[2] + "/" + props.fecha.split('T')[0].split('-')[1] + '/' + props.fecha.split('T')[0].split('-')[0] + " " + "-" + " " + props.fecha.split('T')[1].split('.')[0]}</b></p>
                </div>
                <div className='grupotexto'>
                    <p>Nombre</p>
                    <p><b>{props.nombre}</b></p>
                </div>
                <div className='grupotexto'>
                    <p>Apellido</p>
                    <p><b>{props.apellido}</b></p>
                </div>
                <div className='grupotexto'>
                    <p>N° documento</p>
                    <p><b>{props.dni}</b></p>
                </div>
                <div className='grupotexto'>
                    <p>Teléfono</p>
                    <p><b>{"(" + props.codarea + ")" + " " + props.telefono}</b></p>
                </div>
                <div className='grupotexto'>
                    <p>Localidad</p>
                    <p><b>{props.localidad}</b></p>
                </div>
                <div className='grupotexto'>
                    <p>Email</p>
                    <p><b>{props.email}</b></p>
                </div>
                <hr/>
                <p><b>Denunciado:</b></p>
                <div className='grupotexto'>
                    <p>Nombre</p>
                    <p><b>{props.nombredenunciado}</b></p>
                </div>
                <div className='grupotexto'>
                    <p>Apellido</p>
                    <p><b>{props.apellidodenunciado}</b></p>
                </div>
                <hr/>
                <div className='grupotexto'>
                    <p>Título de la Denuncia</p>
                    <p><b>{props.titulodenuncia}</b></p>
                </div>
                <div className='grupotexto'>
                    <p>Tipo de Infracción</p>
                    <p><b>{props.tipoinfraccion}</b></p>
                </div>
                <div className='grupotexto'>
                    <p>Descripcion</p>
                    <p><b>{props.descripcion}</b></p>
                </div>
                <button className="btn btn-primary mb-2" type="button">Descargar detalle...</button>
                <button className="btn btn-outline-danger" type="button" onClick={props.Close}>Cerrar</button>
            </div>
        </>
    )
}

export default Modal;