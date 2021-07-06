var express = require('express')
var db = require('./database')
var app = express();
app.set("view engine","html")
app.set("views","./client")
app.use(express.static("./client"))
var idols
db.readAll((data)=>idols=data)
app.get('/', function (req, res) {
  res.render("index")
});
app.get('/get',(req,res)=>{
  res.send(idols)
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})