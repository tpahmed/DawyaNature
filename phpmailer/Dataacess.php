<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Dataaccess
 *
 * @author pc
 */

class Dataaccess {
       //methode connection

        public static  function connextion()
                {
                try

                   {
                    
                   $bdd = new PDO('mysql:host=eu-west.connect.psdb.cloud;dbname=dawyanature', '42g1y1x9ny5humc42jdu', 'pscale_pw_rK7md9XFzsa9wgFR2391P6SYFsqnH5jqD5zMNbnulwa',
                   array(
                   PDO::MYSQL_ATTR_SSL_CA => "./cacert.pem",
               ));
				   
		   $bdd->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
                   return $bdd;
                   }
               catch (Exception $e)
                   {
        echo('Erreur : ' . $e->getMessage());
                   }
                }

    //methode de mise à jour

        public static function miseajour($req)
                {
  try

                   {
                   $bdd= Dataaccess::connextion() ;
                   $maj=$bdd->exec($req);
                   return $maj;
                    }
               catch (Exception $e)
                   {
        echo('Erreur : ' . $e->getMessage());
                   }  $bdd=null;

                }


//Methode de selection

        public static function selection($req)
                {
            try{
            $bdd=self::connextion() ;
            $rep=$bdd->query($req);
return $rep ;
                 }
               catch (Exception $e)
                   {
        echo('Erreur : ' . $e->getMessage());
                   }  $bdd=null;


}
    
    
    
    
    
    
}
