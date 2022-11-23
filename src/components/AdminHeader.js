import logo from '../images/PA.png';
import { Link } from 'react-router-dom'
import '../App.css'
import './styles/header.css'

function AdminHeader() {
    return (
        <div className="header">
            <Link style={{textDecoration: 'none'}} to='/'>
                <img src={ logo } alt="Policia Ambiental"/>
            </Link>
            <Link style={{textDecoration: 'none'}} to='/admin'>
                <button className='btn btn-primary'>Administrador</button>
            </Link>
        </div>
    )
}

export default AdminHeader; 