require('dotenv').config();
const mysql = require('mysql');
const AesEncryption = require('aes-encryption');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors");
const moment = require('moment');



const aes = new AesEncryption();

//definition de cle de securiter (64char)
aes.setSecretKey("45eacffafd4771e770857b7bd15e1e4011ba9f69fd22d452fa299872f16753f4");

//connection a la base  de donne
const connection = mysql.createPool(process.env.DATABASE_URL)

//creation du Router
const app = new express();

//Prepare le routeur
const port = 3001;
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json());

//configure le routeur
app.get('/',(req,res)=>{
    res.status(200).send("Connected");
})

app.post('/api/login',(req,res)=>{
    let data = {data_status:'success'}
    const creds = ToJSON(req.body);
    if (!creds.user || !creds.pass){
        res.status(403).send("BAD REQUEST");
        return {status:403}
    }
    let query = "SELECT *,UNIX_TIMESTAMP() as epoch  FROM utilisateur WHERE username = ?";
    let response = connection.query(query,[creds.user],(error,result)=>{
        let RDPacket = ToJSON(result);
        if(!RDPacket[0]){
            data.data_status = 'fail'
            res.status(200).send(data);
        }
        else if (RDPacket[0].pass == creds.pass){
            data.content = EnCryptor(`${creds.user}:${creds.pass}:${RDPacket[0].epoch}`);
            res.status(200).send(data);
        }
        else{
            data.data_status = 'fail'
            res.status(200).send(data);
        }
    });
    response.start()
})

app.post('/api/checktoken',(req,res)=>{
    let data = {data_status:'success'};

    const d = new Date();
    
    const Token = ToJSON(req.body).ctoken;
    if (!Token){
        data.data_status = 'fail';
        res.status(200).send(data);
        return
    }
    
    let Token_content = DeCryptor(Token).split(":");
    if (Token_content.length != 3){
        data.data_status = 'fail';
        res.status(200).send(data);
        return
    } 
    else if ((d.getTime() - Token_content[2])>(d.getTime() - (24*60*60*1000))){
        data.data_status = 'fail';
        res.status(200).send(data);
        return
    }
    else{
        let creds = {user:Token_content[0],pass:Token_content[1]};
        let query = "SELECT * FROM utilisateur WHERE username = ?";
        let response = connection.query(query,[creds.user],(error,result)=>{
            let RDPacket = ToJSON(result);
            if(!RDPacket[0]){
                data.data_status = 'fail'
                res.status(200).send(data);
            }
            else if (RDPacket[0].pass == creds.pass){
                res.status(200).send(data);
            }
            else{
                data.data_status = 'fail'
                res.status(200).send(data);
            }
        });
        response.start()
    }
})

// Recupere la list des client minimalise
app.get('/api/getclients',(req,res)=>{
    let query = "SELECT id,nom,prenom,ville,Nombrepersonne,DateDebut FROM client";
    let response = connection.query(query,[],(error,result)=>{
        let RDPacket = ToJSON(result);
        for (let i in RDPacket){
            let d = moment.utc(RDPacket[i].DateDebut).format('DD/MM/YYYY');
            RDPacket[i].DateDebut = d;
        }
        res.status(200).send(RDPacket);
    });
    response.start()
});

//lancer le routeur
app.listen(port,()=>{
    console.log('listening on port : ',port);
})

//Fonction pour ne pas repeter
function ToJSON(stringL){
    return JSON.parse(JSON.stringify(stringL))
}

function EnCryptor(data_str){
    return aes.encrypt(data_str);
}
function DeCryptor(data_str){
    return aes.decrypt(data_str);
}
