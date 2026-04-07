const express= require("express");
const app= express();
const path=require("path");
const port =8080;
const todoAppData = [];

const {v4: uuidv4}=require('uuid');


app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views") );
const methodOverride= require("method-override");
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/todoApp")
  .then(() => {
    console.log("MongoDB connected ✅");
  })
  .catch(err => {
    console.log(err);
  });

app.get("/", (req, res)=>{
    res.send("home");
});

app.get("/signup", (req,res) =>{
    res.render("signup.ejs");

    });


app.post("/signup", (req,res) =>{
  const {username, password} = req.body;

  const userExits= todoAppData.find((u) => u.username=== username);
  if(userExits){
    return res.send("User already exits");
  }
  
const newUser= {
    userId: uuidv4(),
    username : username,
    Password :password,
    todos: []
};

todoAppData.push(newUser);
  console.log(todoAppData);
  res.render("dashboard.ejs", {newUser});
});



app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})