const express= require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const app =express();
var cors = require('cors');
const db = mysql.createConnection({
    host :'Localhost',
    user :'root',
    password : 'Aviral@2201',
    database: 'banking_system',
    port:3306,
    
    debug    :  true,
    wait_timeout : 28800,
    connect_timeout :10,
    multiplestatements :true
    // 'Access-Control-Allow-Origin', '*'
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()) ;
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Mysql connected');
})
app.listen('3000',()=>{
    console.log('server started on port 3000');
});
//GET ALL THE USERS
app.get('/user_table',(req,res)=>{
    let sql='SELECT * FROM users';
    let query =db.query(sql, (err,results)=>{
        if(err){
            console.trace(err);
        }
        else{
        console.log(results);
        res.send(results);
        }
    })
});
//UPDATE THE SELECTED USERS
app.put('/update_user',(req,res)=>{
    console.log(req.body);
    let sql='UPDATE users SET bal=? where id=?';
    let query =db.query(sql,[req.body.bal,req.body.id], (err,results)=>{
        res.send("Success");    
    })
});
//ADD NEW USER
app.post('/Add_user',(req,res)=>{
        console.log(req.body);
        var sql = `INSERT INTO users     (Uname,phoneno,email,address,area,city,pincode,Accountno,bal)    VALUES    (?,?,?,?,?,?,?,?,?)`;
        db.query(sql, [req.body.Uname,req.body.phoneno,req.body.email,req.body.address,req.body.area,req.body.city,req.body.pincode,req.body.Accountno,req.body.bal], function (err, data) {
    });
});
//GET ALL TRANSACTIONS
app.get('/transactions',(req,res)=>{
    let sql='SELECT * FROM transactions';
    let query =db.query(sql, (err,results)=>{
        if(err){
            console.trace(err);
        }
        else{
        console.log(results);
        res.send(results);
        }
    })
});
//ADD NEW TRANSACTIONS
app.post('/Add_transaction',(req,res)=>{
    console.log(req.body);
    var sql = `INSERT INTO transactions     (sender,reciver,amount)    VALUES    (?,?,?)`;
    db.query(sql, [req.body.sender,req.body.reciver,req.body.amount], function (err, data) {
    res.send("Success");    
});
});