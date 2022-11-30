import { get_client } from "../server_control/connection";
import { useEffect, useState } from "react";
import './Client.css'

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
    let [Prenom,SetPrenom] = useState("");
    let [Age,SetAge] = useState("");
    let [Tel,SetTel] = useState("");
    let [Email,SetEmail] = useState("");
    let [Pays,SetPays] = useState("");
    let [Ville,SetVille] = useState("");
    let [nmbr,Setnmbr] = useState("");
    let [DateD,SetDateD] = useState("");
    let [DateF,SetDateF] = useState("");

    useEffect(()=>{
        get_client(extract_id()).then((r)=>{
            let data = r.data;
            SetNom(data[0].nom);
            SetPrenom(data[0].prenom)
            SetAge(data[0].age)
            SetTel(data[0].tel)
            SetEmail(data[0].email)
            SetPays(data[0].pays)
            SetVille(data[0].ville)
            Setnmbr(data[0].Nombrepersonne)
            let temp = data[0].DateDebut.split('/').reverse().join('-')
            SetDateD(temp)
            temp = data[0].Datefine.split('/').reverse().join('-')
            SetDateF(temp)
            console.log(data[0])
        });
    },[])


    return (
        <div className="fomulaire">
            <table className="client-table">
                <tr>
                <th>
                    Nom :
                </th>
                <td><input name="nom" id="nom" value={Nom} disabled/></td>
                <th> Prenom :</th>
                <td><input type="text" name="prenom" value={Prenom} disabled/></td>
                </tr>
                <tr>
                    <th>Age :</th>
                    <td><input type="number" name="age" id="" value={Age} disabled/></td>
                    <th>Telephone :</th>
                    <td><input type="text" name="tel" id="" value={Tel} disabled/></td>
                </tr> 
                <tr>
                    <th>Email :</th>
                    <td><input type="email" name="email" id="" value={Email} disabled/></td>
                    <th>Pays :</th>
                    <td><input type="text" name="pays" id="" value={Pays} disabled/></td>
                </tr>
                <tr>
                    <th>Ville :</th>
                    <td><input type="text" name="ville" id="" value={Ville} disabled/></td>

                </tr>
                <tr>
                    <th> type de client </th>
                    
                    <th> Seul <input type="radio" name="typec" value='Seul' checked/></th>
                    <th>Famille <input type="radio" name="typec" value='Famille'/> </th>
                    <th> Amis <input type="radio" name="typec" value='Amis'/></th>
                    <th> Groupe Entreprise  <input type="radio" name="typec" value='Groupe Entreprise'/> </th>
                </tr>
                <tr>
                    <th>Nombre de personnes :</th>
                    <td> <input type="number" name='nmbr' value={nmbr} disabled/></td>
                </tr>
                <tr>
                        <th> <label for="">liste des offeres :</label></th>
                        <td>                   
                        <select name="offre" id="clientoffres">
                            <option value="check"> ---choisir votre offer--</option>
                        </select>
                        </td>
                </tr>
                <tr>
                    <th>Date de resrvation  de : </th>
                    <td><input type="date" name="dated" value={DateD} disabled/></td>
                    <th>Au : </th>
                    <td><input type="date" name="datef" value={DateF} disabled/></td>
                </tr>
                <tr>
                    <th>Repas Jbala sur place déjeuner ou diner :  </th>
                    <td> <th>OUI  <input type="radio" name="repas" value='oui'/></th>
                    <th>Non <input type="radio" name="repas" value='non'/> </th></td>
                </tr>
                <tr>
                    <th class="textarea"  >Souhaits particuliers :  </th>
                </tr>
                <tr>
                    <th></th>
                    <td>
                        <textarea name="souhait" id="clienttarea" cols="30" rows="10"></textarea>
                    </td>
                </tr>
            </table>
    </div>
    )
}