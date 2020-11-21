const express= require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host :'Localhost',
    user :'root',
    password : 'Aviral@2201',
    database: 'banking system',
    port:3306,
    
    debug    :  true,
    wait_timeout : 28800,
    connect_timeout :10
});

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Mysql connected');
})
const app =express();

app.get('/user_table',(req,res)=>{
    let sql='SELECT * FROM users';
    let query =db.query(sql, (err,results)=>{
        if(err){
            console.trace(err);
        }
        else{
        console.log(results);
        res.send("data rendered");
        }
    })
});
app.listen('3000',()=>{
    console.log('server started on port 3000');
});