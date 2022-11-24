import './styles/dashboard.css'
import { Link } from 'react-router-dom'
import logo from '../images/PA.png';

function Dashboard() {
    return(
        <div className='menu'>
            <div className='menuitems_container'>
                <img src={ logo } alt="Policia Ambiental"/>
                <Link to='/admin/dashboard/inicio'>
                    <div className="menuitem">
                        <i className="fa-solid fa-user"/>
                        Item #1
                    </div>
                </Link>
                <Link to='/admin/dashboard/denuncias'>
                    <div className="menuitem">
                        <i className="fa-solid fa-user"/>
                        Item #2
                    </div>
                </Link>
                <Link to='/admin/dashboard/informes'>
                    <div className="menuitem">
                        <i className="fa-solid fa-user"/>
                        Item #3
                    </div>
                </Link>
                <Link to='/admin/dashboard/administrar'>
                    <div className="menuitem">
                        <i className="fa-solid fa-user"/>
                        Item #4
                    </div>
                </Link>
            </div>
            <Link to='/'>
                <button className='btn btn-danger'>Cerrar Sesión</button>
            </Link>
        </div>
    )
}

export default Dashboard;