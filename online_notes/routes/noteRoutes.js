const express = require("express");
const router = express.Router();
const noteModel = require("../models/noteModel");

// Home page
router.get("/", (req, res) => {
    const notes = noteModel.getNotes();
    res.render("index", { notes });
});

// Add note page
router.get("/add", (req, res) => {
    res.render("addNote");
});

// Add note
router.post("/add", (req, res) => {
    const { title, content } = req.body;
    noteModel.addNote({ title, content });
    res.redirect("/");
});

// Delete note
router.get("/delete/:index", (req, res) => {
    noteModel.deleteNote(req.params.index);
    res.redirect("/");
});

// Edit page
router.get("/edit/:index", (req, res) => {
    const note = noteModel.getNote(req.params.index);
    res.render("editNote", { note, index: req.params.index });
});

// Update note
router.post("/edit/:index", (req, res) => {
    const { title, content } = req.body;
    noteModel.updateNote(req.params.index, { title, content });
    res.redirect("/");
});

module.exports = router;