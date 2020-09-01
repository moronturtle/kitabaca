const express = require("express");
const router = express.Router();
// const auth = require("../../middleware/auth");

const CategoryArticle = require("../../models/CategoryArticle");

router.get("/", (req, res) => {
    CategoryArticle.find({}, { _id: 1, category: 1, date: 1 })
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// @route post api/category
// @des create  category
// @access Private

router.post("/", (req, res) => {
    const newCategory = new CategoryArticle({
        category: req.body.category
    });
    newCategory.save().then(category => res.json(category));
});

// @route Delete api/category/:id
// @des Delete category
// @access Private

router.delete("/:id", (req, res) => {
    CategoryArticle.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;