const express= require("express");
const bodyparser= require("body-parser");
const session = require("express-session"); //when the user log in , we will save the user info in session . no need to log in again when the user refresh the page

const AuthRouters=require("../routes/AuthRouters");
const taskRouters= require("../routes/TaskRouters")

const app= express();
 
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true
}));

app.use("/", authRoutes);
app.use("/tasks", taskRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});