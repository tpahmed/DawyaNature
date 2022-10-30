import pfp from '../../Assets/DefaultPFP.jpg'
import './LoginInfo.css'

window.addEventListener("load",()=>{
    const LInfo = document.getElementsByClassName("LoginInfo")[0];

    window.addEventListener("click",onMouseOutAnimation);
    
    LInfo.addEventListener("click",(e)=>{
        onclickAnimation();
        e.stopPropagation();
    });
}); 


function onclickAnimation(){
    const LInfo = document.getElementsByClassName("LoginInfo")[0];
    
    const PFP = document.getElementById("PFP");
    

    if (LInfo.classList.contains("LoginInfoanimation_out")){
        LInfo.classList.replace("LoginInfoanimation_out","LoginInfoanimation_in");
        PFP.classList.replace("PFPanimation_out","PFPanimation_in");
        return
    }
    LInfo.classList.add("LoginInfoanimation_in");
    PFP.classList.add("PFPanimation_in");
    LInfo.onClick = null;
    
}

function onMouseOutAnimation(){
    console.log("hi");
    const LInfo = document.getElementsByClassName("LoginInfo")[0];
    
    const PFP = document.getElementById("PFP");
    
    LInfo.classList.replace("LoginInfoanimation_in","LoginInfoanimation_out");
    PFP.classList.replace("PFPanimation_in","PFPanimation_out");
}

export default function LoginInfo(props){
    return (
        <>
            <div className="LoginInfo">
                <img id='PFP' src={pfp} alt="ProfilePic"/>
            </div>
        </>
    )
}