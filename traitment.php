<?php
include_once("Dataacess.php");

class Client{

  
    //ajouter
    static function Add($nom,$prenom,$age,$pays,$ville,$typec,$nmbr,$dated,$datef,$offre,$repas,$souhait,$tel,$email)
    {
	$req="insert into client  (nom, prenom,age, pays,ville,typeclient,Nombrepersonne, DateDebut, Datefine,offres,repasjbala,SouhaitsParticuliers,email,tel) values ('$nom','$prenom',$age,'$pays','$ville','$typec',$nmbr,'$dated','$datef','$offre','$repas','$souhait','$email','$tel')";
       $c=Dataaccess::miseajour($req);
        return $c;
    }
}



?>