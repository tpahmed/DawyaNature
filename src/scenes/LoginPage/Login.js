import './Login.css';
import Logo from '../../Assets/Logo.jpg';

export default function Login(){
    return (
        <div className="Login-container">
            <img id='Logo-Login' src={Logo} alt='Logo'/>
            <input type={"text"} placeholder="Nom d'utilisateur" className='InputBar' id='username'/>
            <input type={"password"} placeholder="Mot de pass" className='InputBar' id='password'/>
        </div>
    )
}