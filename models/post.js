const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../models/user");

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
    enum: ["stocks", "crypto"],
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

PostSchema.virtual("username").get(
  () => User.findOne({ _id: this.user }).username
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
