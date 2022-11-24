import { get_client } from "../server_control/connection";
import { useEffect, useState } from "react";

export default function Client(){
    function extract_id(){
        let path = window.location.search;
        let get_args = path.split('?')[1];
        let separated_args = get_args.split('&');
        let args = {};
        for (let i in separated_args){
            let a = separated_args[i].split("=")[0];
            let b = separated_args[i].split("=")[1];
            args[a] = b;
        }
        
        if (args.id){
            return args.id;
        }
        else{
            window.location = '/dashboard/inbox';
        }
    }
    let [Nom,SetNom] = useState("");

    useEffect(()=>{
        get_client(extract_id()).then((r)=>{
            let data = r.data;
            SetNom(data[0].nom);
        });
    },[])


    return (
        <div className="fomulaire">
            <label htmlFor="nom">
                Nom :
            </label>
            <br/>
            <input name="nom" id="nom" value={Nom} disabled/>
        </div>
    )
}