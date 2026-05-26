const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  slug: {
    type: String,
    required: true,
    unique: true,
  },

  category: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "",
  },

  isPublished: {
    type: Boolean,
    default: true,
  },

  articleType: {
    type: String,
    enum: ["standard", "featured"],
    default: "standard",
  },
});

module.exports =
  mongoose.models.Article ||
  mongoose.model("Article", articleSchema);