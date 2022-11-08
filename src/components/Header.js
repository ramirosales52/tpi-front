import logo from '../images/PA.png';
import { Link } from 'wouter'
import '../App.css'
import './styles/header.css'

function Header() {
    return (
        <div className="header">
            <Link href='/'>
                <img src={ logo } alt="Policia Ambiental"/>
            </Link>
        </div>
    )
}

export default Header; 