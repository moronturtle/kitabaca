const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const CategoryArticleSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = CategoryArticle = mongoose.model(
  "category_article",
  CategoryArticleSchema
);
