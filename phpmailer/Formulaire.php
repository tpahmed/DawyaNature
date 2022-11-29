<?php
include_once ("Toffers.php");
$offers=Offres::getAlloffer();


while ($offer=$offers->fetch())
{         
?>
    <table id="formt">
	<form action="Formulaire.php" method="POST">
        <tr>
           <th>
            Nom :
           </th>
           <td><input type="text" name="nom"></td>
           <th> Prenom :</th>
           <td><input type="text"name="prenom"></td>
        </tr>
        
        

        <tr>
            <th>Age :</th>
            <td><input type="number" name="age" id=""></td>
            <th>Telephone :</th>
            <td><input type="text" name="tel" id=""></td>
        </tr> 
        <tr>
            <th>Email :</th>
            <td><input type="email" name="email" id=""></td>
            <th>Pays :</th>
            <td><input type="text" name="pays" id=""></td>
        </tr>
        <tr>
            <th>Ville :</th>
            <td><input type="text" name="ville" id=""></td>

        </tr>
        <tr>
            <th> type de client </th>
            
            <th> Seul <input type="radio" name="typec" value='Seul' checked></th>
            <th>Famille <input type="radio" name="typec" value='Famille'> </th>
            <th> Amis <input type="radio" name="typec" value='Amis'></th>
            <th> Groupe Entreprise  <input type="radio" name="typec" value='Groupe Entreprise'> </th>
        </tr>
        <tr>
            <th>Nombre de personnes :</th>
            <td> <input type="number" name='nmbr'></td>
        </tr>
        <tr>
                <th> <label for="">liste des offeres :</label></th>
                <td>                   
                 <select name="offre" id="">
                <option value="check"> ---choisir votre offer--</option> 
                <?php

    
    echo "<option value='$offer[1]'>$offer[1]</option>";
   
}

$offers->closeCursor();
?>


                    </select>
                </td>
            </td>
        </tr>
        <tr>
            <th>Date de resrvation  de : </th>
            <td><input type="date" name="dated"></td>
            <th>Au : </th>
            <td><input type="date" name="datef"></td>
        </tr>
        <tr>
            <th>Repas Jbala sur place déjeuner ou diner :  </th>
            <td> <th>OUI  <input type="radio" name="repas" value='oui'></th>
             <th>Non <input type="radio" name="repas" value='non'> </th></td>
        </tr>

        <tr>
            <th class="textarea"  >Souhaits particuliers :  </th>
          
            
            
           
            
        </tr>
        <tr>
            <th></th>
            <td>
                <textarea name="souhait" id="" cols="30" rows="10"></textarea>
            </td>

        </tr>
        
        <tr>
            <th></th>
            <th></th>
            <th><input type="submit" value="envoyer" name="btn"></th>
        </tr>
       
        


        </form>



    </table>

<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;



require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

include_once("traitment.php");
if (!empty($_POST['btn'] )){
	$nom=$_POST['nom'];
	$prenom=$_POST['prenom'];
	$age=$_POST['age'];
	$tel=$_POST['tel'];
	$email=$_POST['email'];
	$pays=$_POST['pays'];
	$typec=$_POST['typec'];
	$nmbr=$_POST['nmbr'];
	$offre=$_POST['offre'];
	$dated=$_POST['dated'];
	$datef=$_POST['datef'];
	$repas=$_POST['repas'];
	$souhait=$_POST['souhait'];
	$ville=$_POST['ville'];
	
	// $nom = mysqli_real_escape_string($db,htmlspecialchars($_POST['nom'])); 
    // $prenom = mysqli_real_escape_string($db,htmlspecialchars($_POST['prenom']));
	// $age = mysqli_real_escape_string($db,htmlspecialchars($_POST['age'])); 
    // $tel = mysqli_real_escape_string($db,htmlspecialchars($_POST['tel']));
	// $email = mysqli_real_escape_string($db,htmlspecialchars($_POST['email'])); 
    // $pays = mysqli_real_escape_string($db,htmlspecialchars($_POST['pays']));
	// $typec = mysqli_real_escape_string($db,htmlspecialchars($_POST['typec'])); 
    // $nmbr = mysqli_real_escape_string($db,htmlspecialchars($_POST['nmbr']));
	// $offre = mysqli_real_escape_string($db,htmlspecialchars($_POST['offre'])); 
	// $dated = mysqli_real_escape_string($db,htmlspecialchars($_POST['dated'])); 
    // $datef = mysqli_real_escape_string($db,htmlspecialchars($_POST['datef']));
	// $repas = mysqli_real_escape_string($db,htmlspecialchars($_POST['repas'])); 
    // $souhait = mysqli_real_escape_string($db,htmlspecialchars($_POST['souhait']));
	// $ville = mysqli_real_escape_string($db,htmlspecialchars($_POST['ville'])); 
 



	$c=Client::Add($nom,$prenom,$age,$pays,$ville,$typec,$nmbr,$dated,$datef,$offre,$repas,$souhait,$tel,$email);
	
    $mail = new PHPMailer (true);

    $mail->isSMTP();
    
    
    $message='reservation de Mr/Mmr '.$nom.$prenom;
    
    $mymail='omar.chelouani30@gmail.com';
    $to='chelouani.24@gmail.com';
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    
    
    $mail->Username =$mymail;
    $mail->Password='zedildggtqjenotr';
    $mail->SMTPSecure='ssl';
    $mail->Port=465;
    $mail->setFrom($mymail,'dawya nature') ;
    $mail->addAddress ($to);
    $mail->isHTML(true);
    $mail->Subject='nouveau reservation';
    $mail->Body=$message;
    $mail->send();
    echo"
    <script>
    alert('sent succesfully');
    document.location.href='Formulaire.php'
    </script>";
    }
    

?>

    <footer>
        <div class="foot">
            <h3 class="foot-h3">dawya natures</h3>
            <ul class="socials">
                <li><i class="fa-brands fa-square-whatsapp"></i> +212 6178 62 473 (Whatsapp)</li>
                <li><i class="fa-brands fa-square-instagram"></i> dawya_natures</li>
                <li><i class="fa-brands fa-square-facebook"></i> Dawya Natures</li>
                <li><i class="fa-solid fa-square-envelope"></i> reza.dawya.natures@gmail.com</li>
            </ul>
        </div>
        <div class="foot-bottom">
            <p>Copyright &copy;2022 codeOpacity. designed by <span>dawyateam</span></p>
        </div>
    </footer>
    
</body>
</html>
<?php
// if (isset($_POST['btn'] )){
	// $nom=$_POST['nom'];
	// $prenom=$_POST['prenom'];
	// $age=$_POST['age'];
	// $tel=$_POST['tel'];
	// $email=$_POST['email'];
	// $pays=$_POST['pays'];
	// $typec=$_POST['typec'];
	// $nmbr=$_POST['nmbr'];
	// $offre=$_POST['offre'];
	// $dated=$_POST['dated'];
	// $datef=$_POST['datef'];
	// $repas=$_POST['repas'];
	// $souhait=$_POST['souhait'];
	// $ville=$_POST['ville'];
	
	
	
	
	// $req="insert into client nom,prenom,age,pays,ville,typeclient,Nombrepersonne,DateDebut,Datefine,offres,repasjbala,SouhaitsParticuliers,email,tel
		// values($nom,$prenom,$age,$pays,$typec,$nmbr,$dated,$datef,$offre,$repas,$souhait,$tel,$email)";
	// echo ($req);
	// }

?>






























