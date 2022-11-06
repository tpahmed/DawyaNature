import './NavBar.css'
import logo from '../../Assets/Logo.jpg'
import LoginInfo from './NavBar/LoginInfo'


export default function Navbar(){
    return(
    <nav className="NavBar">
        <ul id='NavList'>
            <li><img id="Logo" width={'100em'} src={logo} alt='Logo'/></li>
            <li><LoginInfo/></li>
        </ul>
    </nav>
    )
}