const express = require("express");
const router = express.Router();
const blogModel = require("../models/blogModel");

// Home page
router.get("/", (req, res) => {
    const blogs = blogModel.getBlogs();
    res.render("index", { blogs });
});

// Add blog page
router.get("/add", (req, res) => {
    res.render("addBlog");
});

// Add blog
router.post("/add", (req, res) => {
    const { title, content } = req.body;
    blogModel.addBlog({ title, content });
    res.redirect("/");
});

// View single blog
router.get("/blog/:index", (req, res) => {
    const blog = blogModel.getBlog(req.params.index);
    res.render("viewBlog", { blog, index: req.params.index });
});

// Delete blog
router.get("/delete/:index", (req, res) => {
    blogModel.deleteBlog(req.params.index);
    res.redirect("/");
});

// Edit page
router.get("/edit/:index", (req, res) => {
    const blog = blogModel.getBlog(req.params.index);
    res.render("editBlog", { blog, index: req.params.index });
});

// Update blog
router.post("/edit/:index", (req, res) => {
    const { title, content } = req.body;
    blogModel.updateBlog(req.params.index, { title, content });
    res.redirect("/");
});

module.exports = router;