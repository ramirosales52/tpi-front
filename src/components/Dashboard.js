import './styles/dashboard.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/PA.png';

function Dashboard() {
    const location = useLocation()
        
    return(
        <div className='menu'>
            <div className='menuitems_container'>
                <img src={ logo } alt="Policia Ambiental"/>
                <Link to='/admin/dashboard/inicio'>
                    <div className={location.pathname === '/admin/dashboard/inicio' ? "active" : "menuitem"}>
                        <i className="fa-solid fa-house"/>
                        Inicio
                    </div>
                </Link>
                <Link to='/admin/dashboard/denuncias'>
                    <div className={location.pathname === '/admin/dashboard/denuncias' ? "active" : "menuitem"}>
                        <i className="fa-solid fa-file"/>
                        Denuncias
                    </div>
                </Link>
                <Link to='/admin/dashboard/informes'>
                    <div className={location.pathname === '/admin/dashboard/informes' ? "active" : "menuitem"}>
                        <i className="fa-solid fa-chart-simple"/>
                        Informes
                    </div>
                </Link>
                <Link to='/admin/dashboard/administrar'>
                    <div className={location.pathname === '/admin/dashboard/administrar' ? "active" : "menuitem"}>
                        <i className="fa-solid fa-pen-to-square"/>
                        Administrar
                    </div>
                </Link>
            </div>
            <Link to='/'>
                <button className='btn btn-danger w-100' style={{display: 'flex', alignItems: 'center', gap: '15px'}}><i className="fa-solid fa-right-from-bracket"/>Salir</button>
            </Link>
        </div>
    )
}

export default Dashboard;