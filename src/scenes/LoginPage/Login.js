import './Login.css';
import Logo from '../../Assets/Logo.jpg';

function GoLogin(){
    console.log('Login');
    window.location = '/dashboard';
}

function EnterEvent(e){
    if (e.key === "Enter"){
        GoLogin();
    }
}

export default function Login(){
    return (
        <div className="Login-container">
            <img id='Logo-Login' src={Logo} alt='Logo'/>
            <input type={"text"} placeholder="Nom d'utilisateur" onKeyDown={(e)=>EnterEvent(e)} className='InputBar' id='username'/>
            <input type={"password"} placeholder="Mot de pass" onKeyDown={(e)=>EnterEvent(e)} className='InputBar' id='password'/>
            <input type={"button"} id='Login-btn' onClick={()=>GoLogin()} value={"Se Connecter"}/>
        </div>
    )
}