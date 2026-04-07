const express = require("express");
const router = express.Router();
const projectModel = require("../models/projectModel");

router.get("/", (req, res) => {
    const projects = projectModel.getProjects();
    res.render("index", { projects });
});

router.get("/add", (req, res) => {
    res.render("addProject");
});

router.post("/add", (req, res) => {
    const { title, description } = req.body;
    projectModel.addProject({ title, description });
    res.redirect("/");
});

router.get("/delete/:index", (req, res) => {
    projectModel.deleteProject(req.params.index);
    res.redirect("/");
});

router.get("/edit/:index", (req, res) => {
    const projects = projectModel.getProjects();
    res.render("editProject", {
        project: projects[req.params.index],
        index: req.params.index
    });
});

router.post("/edit/:index", (req, res) => {
    const { title, description } = req.body;
    projectModel.updateProject(req.params.index, { title, description });
    res.redirect("/");
});

module.exports = router;