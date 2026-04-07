const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

router.get("/", (req, res) => {
    res.redirect("/login");
});

router.get("/signup", (req, res) => {
    res.render("signup");
});

router.post("/signup", (req, res) => {
    const { email, password } = req.body;
    userModel.addUser({ email, password });
    res.redirect("/login");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = userModel.findUser(email, password);

    if (user) {
        req.session.user = user;
        res.redirect("/tasks");
    } else {
        res.send("Invalid credentials");
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login");
});

module.exports = router;