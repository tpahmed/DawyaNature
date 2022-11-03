import pfp from '../../../Assets/DefaultPFP.jpg'
import './LoginInfo.css'

//Setup
function Setup(){
    const LInfo = document.getElementsByClassName("LoginInfo")[0];
    
    window.addEventListener("click",onMouseOutAnimation);
    
    LInfo.addEventListener("click",(e)=>{
        onclickAnimation();
        e.stopPropagation();
    });
    const ProfileBtn = document.getElementById('profile-Linfo-btn');
    const SignoutBtn = document.getElementById('signout-Linfo-btn');
    
    ProfileBtn.onclick = ProfileBtnFunc;
    SignoutBtn.onclick = SignoutBtnFunc;
}

//Animation
function onclickAnimation(){
    const LInfo = document.getElementsByClassName("LoginInfo")[0];
    const LInfo_List = document.getElementById("Linfo-list");
    const PFP = document.getElementById("PFP");
    
    
    if (LInfo.classList.contains("LoginInfoanimation_out")){
        LInfo.classList.replace("LoginInfoanimation_out","LoginInfoanimation_in");
        PFP.classList.replace("PFPanimation_out","PFPanimation_in");
    }
    else{
        LInfo.classList.add("LoginInfoanimation_in");
        PFP.classList.add("PFPanimation_in");
    }
    LInfo_List.classList.replace("Linfo-list-hide","Linfo-list-unhide");
    
}

function onMouseOutAnimation(){
    const LInfo = document.getElementsByClassName("LoginInfo")[0];
    const LInfo_List = document.getElementById("Linfo-list");
    const PFP = document.getElementById("PFP");
    LInfo_List.classList.replace("Linfo-list-unhide","Linfo-list-hide");
    LInfo.classList.replace("LoginInfoanimation_in","LoginInfoanimation_out");
    PFP.classList.replace("PFPanimation_in","PFPanimation_out");
    setTimeout(()=> PFP.classList.remove("PFPanimation_out"),1000);
    setTimeout(()=> LInfo.classList.remove("LoginInfoanimation_out"),1000);
}


//Fuctionality

function ProfileBtnFunc(){
    console.log("Profile");
}

function SignoutBtnFunc(){
    console.log("SignOut");
    window.location = '/login';
}


export default function LoginInfo(props){
    
    return (
        <>
            <div className="LoginInfo" onLoad={()=>Setup()}>
                <img id='PFP' src={pfp} alt="ProfilePic"/>
                <ul id='Linfo-list' className='Linfo-list-hide'>
                    <li>
                        <input className='Linfo-btn' id='profile-Linfo-btn' type={"button"} value={"Profile"}/>
                    </li>
                    <li>
                        <input className='Linfo-btn' id='signout-Linfo-btn' type={"button"} value={"Se Deconnecter"}/>
                    </li>
                </ul>
            </div>
        </>
    )
}