import express from "express";
const router = express.Router();
// import {
//   getAllPosts,
//   createNewPost,
//   getPostById,
// } from "../controllers/postControllers.js";
import * as postController from "../controllers/postControllers.js";

router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createNewPost);

router.route("/:id").get(postController.getPostById);

export default router;
