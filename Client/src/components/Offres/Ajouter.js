import './Ajouter.css'
import React, { useState } from 'react'

export default function Ajouter(){
    const [file,setFile]=useState('')
    
    const handleChange=(e)=>{
        const data=e.target.files[0]
         setFile(data)
    }
    function ajouter_offre(){

    }
    function EnterEvent(e){
        if (e.key === "Enter"){
            ajouter_offre();
        }
    }
    return (
        <div>
            
            <fieldset className='image-input'>
                <legend id='a-legend'>Image</legend>
                <center>
                    <label htmlFor="img-upload" id='lbl-image'>
                        Cliquez Ici
                    </label>
                    <input type="file" style={{visibility:"hidden"}}  id='img-upload' onChange={handleChange}/>   
                    {file &&
                    
                        <div> 
                        <img src={URL.createObjectURL(file)} width="30%" alt="preview"/>
                        </div>  
                    }         
                </center>
            </fieldset>
            <input type={"text"} placeholder="Titre" onKeyDown={(e)=>EnterEvent(e)} className='InputBar-A' id='titre'/>
            <input type={"text"} placeholder="Contenu" onKeyDown={(e)=>EnterEvent(e)} className='InputBar-A' id='contenu'/>
            <input type={"button"} id='create-btn' onClick={()=>ajouter_offre()} value={"Ajouter"}/>
        </div>
    )
}