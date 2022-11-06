require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors");

const port = 3001;

const connection = mysql.createPool(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')
let response = connection.query('use dawyanature',(error,result)=>{
    console.log(result);
});
response.start()

const app = new express();

app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json());


app.get('/',(req,res)=>{
    
    let query = "select * from utilisateur"
    response = connection.query(query,(error,result)=>{
        console.log(result);
        res.status(200).send(result);
    });
    response.start()
    
})


app.listen(port,()=>{
    console.log('listening on port : ',port);
})
