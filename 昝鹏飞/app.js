/* 
* @Author: zpf
* @Date:   2018-01-08 15:42:58
* @Last Modified by:   Busy
* @Last Modified time: 2018-01-08 16:11:15
*/


const express=require("express");
const bodyparser=require("body-parser");
const static=require("express-static");
const app = express();
app.listen(1345);
const use=require("./router/use")
app.use(bodyparser.urlencoded({}));

app.use('/use',use);

app.use(static('./public'));















