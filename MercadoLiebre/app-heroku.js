const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', function(req,res){
    let Path = path.resolve(__dirname,'./views/home.html')
    res.sendFile(Path)
});

app.get('/register', (req, res) => {
    let Path = path.resolve(__dirname,'./views/register.html')
    res.sendFile(Path)
})

app.get('/login', (req, res) =>{
    let Path = path.resolve(__dirname,'./views/login.html')
    res.sendFile(Path)
})

app.listen(process.env.PORT || 3000, function(req,res){
    console.log("Server up and running")
});