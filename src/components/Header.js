import logo from '../images/PA.png';
import { Link } from 'react-router-dom'
import '../App.css'
import './styles/header.css'

function Header() {
    return (
        <div className="header">
            <Link style={{textDecoration: 'none'}} to='/'>
                <img src={ logo } alt="Policia Ambiental"/>
            </Link>
        </div>
    )
}

export default Header; 