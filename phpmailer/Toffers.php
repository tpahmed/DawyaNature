<?php

include_once ('Dataacess.php');
class Offres
{


    public static function getAlloffer()
    {


        $cur=Dataaccess::selection("select * from offer");


        return $cur;





    }
    static function AddOffer($f_name,$l_name,$email,$pass)
    {
        $req="INSERT INTO offer(titre, contenu, images,entered) VALUES
        ('$titre', '$contenu', '$images', now())";
        $c=Dataaccess::miseajour($req);
        return $c;
    }




    }
   ?>