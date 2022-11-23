import './styles/modal.css'
import logo from '../images/PA.png'

function Modal(props) {
    if(!props.open) return null
    return(
        <>
            <div className='overlay'/>
            <div className="modal-container">
                <img src={logo}/>
                <h3><b>Nombre:</b> {props.nombre}</h3>
                <h3><b>Apellido:</b> {props.apellido}</h3>
                <h3><b>Localidad:</b> {props.localidad}</h3>
                <h3><b>Nombre Denunciado:</b> {props.nombredenunciado}</h3>
                <h3><b>Apellido Denunciado:</b> {props.apellidodenunciado}</h3>
                <h3><b>Tipo de Infracción:</b> {props.tipoinfraccion}</h3>
                <h3><b>Motivo:</b> {props.motivo}</h3>
                <button className="btn btn-outline-danger" type="button" onClick={props.Close}>Cerrar</button>
            </div>
        </>
    )
}

export default Modal;