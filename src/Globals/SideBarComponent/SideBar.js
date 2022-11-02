import { Link } from "react-router-dom";
import "./SideBar.css"

//Setup
function Setup(){
    const btn_1 = document.getElementById("btn-1");
    const btn_2 = document.getElementById("btn-2");
    const btn_3 = document.getElementById("btn-3");
    const btn_4 = document.getElementById("btn-4");
    btn_1.addEventListener("click",PageDAccueil);
    btn_2.addEventListener("click",ModifierLesPages);
    btn_3.addEventListener("click",BoiteDeReception);
    btn_4.addEventListener("click",Graphiques);
}

//Fuctionalities
function PageDAccueil(){
    console.log("Page D'accueil");
}
function ModifierLesPages(){
    console.log("Modifier les pages");
}
function BoiteDeReception(){
    console.log("boîte de réception");
}
function Graphiques(){
    console.log("Graphiques");
}


export default function Side(){
    return(
        <div className="SideBar" onLoad={()=>Setup()}>
            <ul className="SideBar-list">
                <li><Link to="home"><input className="SideBar-BTN" id="btn-1" type={"button"} value={"Page D'accueil"} /></Link></li>
                <li><Link to="edit"><input className="SideBar-BTN" id="btn-2" type={"button"} value={"Modifier les pages"} /></Link></li>
                <li><Link to="inbox"><input className="SideBar-BTN" id="btn-3" type={"button"} value={"boîte de réception"} /></Link></li>
                <li><Link to="charts"><input className="SideBar-BTN" id="btn-4" type={"button"} value={"Graphiques"} /></Link></li>
            </ul>

        </div>
    )
}