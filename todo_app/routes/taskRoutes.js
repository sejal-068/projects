const express = require("express");
const router = express.Router();
const taskModel = require("../models/taskModel");

function isAuth(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
}

router.get("/", isAuth, (req, res) => {
    const tasks = taskModel.getTasks();
    res.render("dashboard", { tasks });
});

router.post("/add", isAuth, (req, res) => {
    taskModel.addTask(req.body.task);
    res.redirect("/tasks");
});

router.get("/delete/:index", isAuth, (req, res) => {
    taskModel.deleteTask(req.params.index);
    res.redirect("/tasks");
});

module.exports = router;