const express= require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');


app.use(express.static(path.join(__dirname,'build')));
app.use(express.static(path.join(__dirname,'build2')));
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true});

const userSchema ={
    email:String,
    password:String
};

const User = new mongoose.model("User",userSchema);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'));
}); 

app.get("/account",(req,res)=>{
    res.render("account");
});


app.get("/register",(req,res)=>{
    res.render("register");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/register",(req,res)=>{
const newUser = new User({
    email:req.body.username,
    password:req.body.password
});
newUser.save(function(err){
if(err){
    console.log(err);
}else{
    res.redirect("/");
    
}
});
});


app.post("/login",function(req,res){
const userName = req.body.username;
const password = req.body.password;

User.findOne({email:userName},function(err,foundUser){
if(err){
    console.log(err);
}else{
    if(foundUser){
        if(foundUser.password === password){
            res.redirect("/");
        }else{
            res.send("<h1>Wrong password</h1>");
        }
    }else{
        res.send("<h1>User not found</h1>");
    }
}
});

});




app.listen(3000,()=>{
    console.log("server running at port 3000");
})