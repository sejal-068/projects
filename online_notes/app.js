const express = require("express");
const bodyParser = require("body-parser");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", noteRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});