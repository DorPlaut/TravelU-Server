const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { checkJwt } = require('../authz/check-jwt');
const jsonParser = bodyParser.json();

const {
  createNewPost,
  getAllPosts,
  handleLikes,
  postComment,
} = require('../controllers/post');

router
  .route('/')
  .get(getAllPosts)
  .post(checkJwt, createNewPost)
  .put(checkJwt, handleLikes);
router.route('/comment').put(checkJwt, postComment);
// router.route('/all').get(getAllUser);

module.exports = router;
