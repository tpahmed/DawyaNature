import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import "./SideBar.css";

// //Setup
// function Setup(){
//     const btn_1 = document.getElementById("btn-1");
//     const btn_2 = document.getElementById("btn-2");
//     const btn_3 = document.getElementById("btn-3");
//     const btn_4 = document.getElementById("btn-4");
//     btn_1.addEventListener("click",PageDAccueil);
//     btn_2.addEventListener("click",ModifierLesPages);
//     btn_3.addEventListener("click",BoiteDeReception);
//     btn_4.addEventListener("click",Graphiques);
// }

// //Fuctionalities
// function PageDAccueil(){
//     console.log("Page D'accueil");
// }
// function ModifierLesPages(){
//     console.log("Modifier les pages");
// }
// function BoiteDeReception(){
//     console.log("boîte de réception");
// }
// function Graphiques(){
//     console.log("Graphiques");
// }


export default function Side(){
    
    return(
        <div className="SideBar">
            <ul className="SideBar-list">
                <li><Link to="home"><button className="SideBar-BTN" id="btn-1" type={"button"}><Stack direction="row" alignItems="center" gap={1}><HomeIcon/><Typography> Page D'accueil</Typography></Stack></button></Link></li>
                <li><Link to="edit"><button className="SideBar-BTN" id="btn-2" type={"button"}><Stack direction="row" alignItems="center" gap={1}><EditIcon/><Typography> Modifier les pages</Typography></Stack></button></Link></li>
                <li><Link to="inbox"><button className="SideBar-BTN" id="btn-3" type={"button"}><Stack direction="row" alignItems="center" gap={1}><MailIcon/><Typography> boîte de réception</Typography></Stack></button></Link></li>
                <li><Link to="charts"><button className="SideBar-BTN" id="btn-4" type={"button"}><Stack direction="row" alignItems="center" gap={1}><QueryStatsIcon/><Typography> statistiques</Typography></Stack></button></Link></li>
            </ul>

        </div>
    )
}