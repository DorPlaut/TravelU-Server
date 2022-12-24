const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { checkJwt } = require('../authz/check-jwt');
const jsonParser = bodyParser.json();

const {
  getAllUser,
  getUser,
  createNewUser,
  updateUser,
  setDarkMode,
} = require('../controllers/user');

router
  .route('/')
  .get(getUser)
  .post(checkJwt, createNewUser)
  .put(checkJwt, updateUser);
router.route('/all').get(getAllUser);
router.route('/darkMode').put(setDarkMode);

module.exports = router;
