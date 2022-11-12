import { SendLoginReq } from '../../server_control/connection';
import Logo from '../../Assets/Logo.jpg';
import { checkLogin } from '../../server_control/connection';
import './Login.css';




export default function Login(){
    checkLogin();
    async function GoLogin(){
        let user = document.getElementById('username').value;
        let pass = document.getElementById('password').value;
        await SendLoginReq(user,pass);
    }
    function EnterEvent(e){
        if (e.key === "Enter"){
            GoLogin();
        }
    }
    return (
        <div className="Login-container">
            <img id='Logo-Login' src={Logo} alt='Logo'/>
            <input type={"text"} placeholder="Nom d'utilisateur" onKeyDown={(e)=>EnterEvent(e)} className='InputBar' id='username'/>
            <input type={"password"} placeholder="Mot de pass" onKeyDown={(e)=>EnterEvent(e)} className='InputBar' id='password'/>
            <input type={"button"} id='Login-btn' onClick={()=>GoLogin()} value={"Se Connecter"}/>
        </div>
    )
}