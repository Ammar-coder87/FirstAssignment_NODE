const express = require("express")
const app = express();
const filesys = require("fs");


const parsing = express.urlencoded({extended : true}); 
const path = require('path');
const port = 5000;
//app.use(express.static('static/Firststyle.css'));
//app.use(express.static(__dirname + '../static/Firststyle.css'));

app.use("/static", express.static(path.join(__dirname, "/static")))
app.get("/",(req, res, next)=>{
    res.sendFile(path.join(__dirname, "index.html"))
});
app.post("/Toregester", (req, res, next)=>{
    res.sendFile(path.join(__dirname, "index11.html"))
});

app.post("/information", parsing, (req, res, next)=>{
    console.log(req.body)
    const savingFile = req.body;
    filesys.writeFileSync('info.txt',JSON.stringify(savingFile))
    res.end();
});

app.listen(port, ()=>{
    console.log('listening to the server')
    });