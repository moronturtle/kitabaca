const express = require("express");
const router = express.Router();
var imgur = require("imgur");
const config = require("config");
// const auth = require("../../middleware/auth");
const Article = require("../../models/Article");

router.get("/", (req, res) => {
  Article.find({}, { title: 1, category: 1, date: 1, image_url: 1, _id: 1 })
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route get api/article/main-news
// @des get top 5 article order by date article
// @access Private

router.get("/main-news", (req, res) => {
  Article.find({}, { title: 1, category: 1, image_url: 1, _id: 1 })
    .sort({ date: -1 })
    .limit(5)
    .then(items => res.json(items));
});

// @route get api/article/category-news
// @des get category news article order by category

router.get("/category-news", (req, res) => {
  Article.aggregate(
    [
      { $sort: { category: -1, date: -1 } },
      {
        $group: {
          _id: "$category",
          news: { $push: "$$ROOT" }
        }
      },
      { $project: { news: { $slice: ["$news", 4] } } }
    ],
    (err, categoryNews) => {
      res.json(categoryNews);
    }
  );
});

// @route post api/article
// @des create  article
// @access Private

router.post("/", (req, res) => {
  const IMGUR_URL = "https://api.imgur.com/3/";
  const image = req.body.fileImage;
  imgur.setClientId(config.get("IMGUR_CLIENT_ID"));
  imgur.setAPIUrl(IMGUR_URL);
  imgur
    .uploadBase64(image)
    .then(function(json) {
      const newArticle = new Article({
        title: req.body.title,
        category: req.body.category,
        content: req.body.content,
        image_url: json.data.link
      });

      newArticle.save().then(() => res.json({ status: true }));
    })
    .catch(function(err) {
      console.error("error", err.message);
    });
});

// @route Delete api/article/:id
// @des Delete article
// @access Private

router.delete("/:id", (req, res) => {
  Article.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

router.get("/news/:id", (req, res) => {
  Article.find(
    { _id: req.params.id },
    { title: 1, category: 1, content: 1, image_url: 1, _id: 1 }
  ).then(items => res.json(items));
});

module.exports = router;
