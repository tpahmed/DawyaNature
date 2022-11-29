<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dawya Natures</title>
    <script src="JS/style.js" defer></script>
    <script src="JS/bootstrap.js" defer></script>
    <link rel="stylesheet" href="CSS/style.css">
    <!-- <link rel="stylesheet" href="CSS/bootstrap.min.css"> -->
</head>
<body>
    
    <nav>
        <div class="Nav">
            <table>
                <tr>
                    <td>
                        <img src="Media/Logo.png" id="Logo" alt="Logo">

                    </td>
                    <td id="optstd">

                            <div class="tglmenu">
                                <div id="menus">
                                    <a href="#">Map</a>
                                    <a href="#">Dawya Nature</a>
                                    <a href="#">Blob</a>
                                    <a href="#">Offres</a>
                                    <a href="#">FAQ</a>
                                    <a href="#" id="Reservation">Reservation</a>
                                </div>
                                <a href="javascript:void(0);" class="icon"
                                onclick="MobileMenu()">
                                <span id="tglbtn" onclick="changeIcon(this)">
                                    &#9776;
                                </span>
                                
                            </a>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </nav>

    <button class="mute">
        <img id="muteimg" src="Media/mute.png" alt="mute">
    </button>
    <header id="Vid">
        <div class="landing">
            <div class="map">
                <svg>
                    <path stroke="black" stroke-width="2px" d="M5 190 L70 140 L220 165 L300 150 L420 160 L540 158 L620 180 L660 260 L610 350 L570 340 L525 315 L470 360 L350 310 L230 290 L130 250 L30 250 Z">    
                </svg>
            </div>
            <video class="main_Vid" src="Media/DawyaVID.mp4" autoplay loop plays-inline >
            </video>
            <audio src="Media/music.mp3" id="music" autoplay></audio>
        </div>
    </header>
    <main>

            <div class="container">
                <table class="main-tbl">
                    <tr>
                        <td class="td1">
                            <ul id="langs">
                                <li id="checkedlang">FR</li>
                                <li>EN</li>
                                <li>ES</li>
                                <li>AR</li>
                            </ul>
                            <img id="pImage" src="" alt="">
                        </td>
                        <td class="td2">
                            <h2 id="titreparag">Dawya Natures ?</h2>
                            <p id="parag">
                                Vous êtes en quête d’une expérience totalement inédite et singulière en pleine
                                nature ? … Alors laissez-vous emporter par des expériences 100 % nature
                                avec DAWYA NATURES pour le plaisir d’un retour au source en profitant
                                intelligemment et avec respect l’arrière pays Jbala et ses espaces !
                                Un trésors du monde rural, le Douar Boujmil est un village pittoresque qui
                                s’offrent à vous ; ces espaces naturels exceptionnels, ces habitants Al-Houz
                                restés traditionnellement paysans et simple, ces montages calcaires facturés
                                et majestueuses, sa(ses) source(s) d’eau clair et résurgences permanente(s),
                                ces rochers comme des statuts millénaires, sa faune - singe Mangot ,
                                corneille, épervier et autres rapaces, sa flore luxuriante au printemps e ces
                                olivier géants mufti-centenaire , son panorama unique sur la méditerranée et
                                les montagne du Rif !
                                Dans le prolongement de la chaîne Monte Blanco, Boujmil est à 150 mètre
                                d’altitude et le pic du mont Boujmil à 681 m avec une vue magnifique sur la
                                mer méditerranée.
                                Le Douar Boujmil, un site encore méconnue et à préserver, est
                                espace idéal pour un retour à la nature dont nous avons tous
                                besoin !    
                            </p>
                        </td>
                    </tr>
        
                </table>
            </div>
            <div class="container">
                <table class="main-tbl">
                    <tr>
                        <td class="td3">
                            <img id="blobimg" src="Media/blobnoBG.png" alt="">
                        </td>
                        <td class="td4">
                            <h2 id="titreparag">Qui est-ce?</h2>
                            <p id="paragblob">
                                Depuis des années, le blob fascine les scientifiques. Dépourvu de cerveau mais doué pour apprendre, quasiment immortel, capable de se déplacer... Cet organisme à l'apparence visqueuse et aux airs d'éponge intrigue également le grand public. 
                            </p>
                        </td>
                    </tr>
        
                </table>
            </div>
            <div class="container">
                <?php
        include_once ("Toffers.php");
        $offers=Offres::getAlloffer();
        
        
            
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
        
        while ($offer=$offers->fetch())
        {   
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
        
        
            </div>
    </main>
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