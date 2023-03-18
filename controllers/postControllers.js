const getAllPosts = async (req, res, next) => {
  res.send("Get all post route");
};

const createNewPost = async (req, res, next) => {
  res.send("Create new post route");
};

const getPostById = async (req, res, next) => {
  res.send("Get post by Id");
};

export { getAllPosts, createNewPost, getPostById };
