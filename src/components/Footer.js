import logo from '../images/logo-ministerio.png';
import logogob from '../images/logos-footer.png';
import '../App.css';
import './styles/footer.css';

function Footer(){
    return (
        <div className="footer">
            <img src={ logo } alt="Policia Ambiental"/>
            <img src={ logogob } alt="Policia Ambiental"/>
        </div>
    )
}


export default Footer;