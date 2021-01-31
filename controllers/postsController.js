const User = require("../models/user");
const Post = require("../models/post");

exports.getPosts = async (req, res) => {
  const posts = await Post.find({ category: req.body.category })
    .populate("user", ["username"])
    .sort({ created_at: -1 });

  res.json(posts);
};

exports.createPost = (req, res, next) => {
  console.log(req.user);
  console.log(req.body.title);
  const { title, body, image, category } = req.body;
  const post = new Post({
    title: title,
    body: body,
    category: category,
    user: req.user._id,
  });

  if (req.body.parent) {
    post.parent = req.body.parent;
  }

  if (req.body.image) {
    post.image = req.body.image;
  }

  console.log(`post username here ${post.username}`);

  post.save((err) => {
    if (err) {
      return next(err);
    }
    res.json(post);
  });
};
