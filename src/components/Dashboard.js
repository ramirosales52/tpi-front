import './styles/dashboard.css'
import { Link } from 'react-router-dom'
import logo from '../images/PA.png';

function Dashboard() {
    return(
        <div className="dashboardBody">
            <div className='menu'>
                <div className='menuitems_container'>
                    <img src={ logo } alt="Policia Ambiental"/>
                    <div className="menuitem">
                        <i className="fa-solid fa-user"/>
                        Item #1
                    </div>
                    <div className="menuitem">
                        <i className="fa-solid fa-user"/>
                        Item #2
                    </div>
                    <div className="menuitem">
                        <i className="fa-solid fa-user"/>
                        Item #3
                    </div>
                    <div className="menuitem">
                        <i className="fa-solid fa-user"/>
                        Item #4
                    </div>
                    <div className="menuitem">
                        <i className="fa-solid fa-user"/>
                        Item #5
                    </div>
                </div>
                <Link style={{textDecoration: 'none'}} to='/'>
                    <button className='btn btn-danger'>Cerrar Sesión</button>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard;