const express= require("express");
const app= express();
const path=require("path");
const port =8080;

const {v4: uuidv4}=require('uuid');


app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views") );
const methodOverride= require("method-override");
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));