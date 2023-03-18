import Post from "../models/Posts.js";

const getAllPosts = async (req, res, next) => {
  try {
    // [post, _] reason is hide array buffer list
    const [posts, _] = await Post.finadAll();
    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createNewPost = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let post = new Post(title, body);

    post = await post.save();

    res.status(200).json({ message: "Post Created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let [post, _] = await Post.findById(postId);

    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { getAllPosts, createNewPost, getPostById };
