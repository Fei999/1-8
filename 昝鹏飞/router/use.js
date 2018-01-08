/* 
* @Author: zpf
* @Date:   2018-01-08 15:44:27
* @Last Modified by:   Busy
* @Last Modified time: 2018-01-08 16:57:04
*/

var express=require("express");
var mysql=require("mysql");
var router=express.Router();
var pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"login",
    port:"3307"
})


//注册
router.use('/add',function(req,res){
    var user = req.body.user;
    var pass = req.body.pass;
    var data = req.body.data;
    pool.query('SELECT * FROM sign',function(err,rows){
        if(err) throw err;
        for(i in rows){
            if(rows[i].user==user){
                res.send("用户名已注册");
                return;
            }
        }
        pool.query(`INSERT INTO sign (time,user,pass) VALUES("${data}","${user}","${pass}") `,function(err,rows){
                    if(err) throw err;
                    res.send("注册成功")
        })
    })
})
router.use('/sel',function(req,res){
    var user = req.body.user;
    var pass = req.body.pass;
    pool.query('SELECT * FROM sign',function(err,rows){
        if(err) throw err;
        for(i in rows){
            if(rows[i].user==user&&rows[i].pass==pass){
                res.send("登录成功");
                return;
            }
        }
        res.send("账号或密码错误")
    })
})





module.exports = router