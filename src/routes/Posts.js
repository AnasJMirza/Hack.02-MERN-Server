import express from 'express';
import { addPosts, getPosts } from '../controllers/Post.js';

const router = express.Router();


router.get("/random", getPosts);
router.post("/", addPosts);
router.get("/search", );

export default router;
