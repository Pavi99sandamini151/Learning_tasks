const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: true, credentials: true}));

// @ts-ignore
mongoose.connect("mongodb://127.0.0.1:27017/Auth",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('database connected');
    }
})

//user schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

// @ts-ignore
const User = new mongoose.model("User", userSchema);

//routes routes
app.post("/login",(req,res)=>{
    const {username,password} =req.body;
    User.findOne({username:username},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"login success",user:user})
            }else{
                res.send({message:"wrong credentials"})
            }
        }else{
            res.send("not register")
        }
    })
});
app.post("/signup",(req,res)=>{
    console.log(req.body)
    const {username,password} =req.body;
    User.findOne({username:username},(err,user)=>{
        if(user){
            res.send({message:"user already exist"})
        }else {
            const user = new User({username,password})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })
});

app.listen(5000,()=>{
    console.log("started")
})