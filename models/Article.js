const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Article = mongoose.model("article_content", ArticleSchema);
