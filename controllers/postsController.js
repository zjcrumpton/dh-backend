const User = require("../models/user");
const Post = require("../models/post");

exports.getPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ created_at: -1 });
  res.json(posts);
};

exports.createPost = (req, res, next) => {
  console.log(req.user);
  console.log(req.body.title);
  const { title, body, image, category } = req.body;
  const post = new Post({
    title: title,
    body: body,
    image: image,
    category: category,
    user: req.user._id,
  });

  post.save((err) => {
    if (err) {
      return next(err);
    }
    res.json(post);
  });
};
