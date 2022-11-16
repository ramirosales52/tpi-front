import '../App.css'
import './styles/denunciabtn.css'
import { Link } from "react-router-dom";


function MainButtons(){
    return(
        <div className='btn-container'>
            <Link style={{textDecoration: 'none'}} to="/formulario">
                <div className='hacer-denuncia btn-card-div'>
                    <div className='icon-div'>
                        <i className="fa-solid fa-pen-to-square fa-6x icon"></i>
                    </div>
                    <hr/>
                    <div className='btn-title'>
                        <h5>Hace tu denuncia</h5>
                    </div>
                </div>
            </Link>

            <Link style={{textDecoration: 'none'}} to="/buscar">
                <div className='estado-denuncia btn-card-div'>
                    <div className='icon-div'>
                        <i className="fa-solid fa-circle-info fa-6x icon"></i>
                    </div>
                    <hr/>
                    <div className='btn-title'>
                        <h5>Estado de denuncia</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MainButtons;