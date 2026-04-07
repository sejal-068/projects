const express = require("express");
const bodyParser = require("body-parser");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", projectRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});