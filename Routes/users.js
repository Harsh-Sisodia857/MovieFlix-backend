const express = require("express");
const router = express.Router();
const userController = require('../Controller/userController');
const auth = require('../middleware/auth');

router.get('/me',auth, userController.getUser);

//creating user
router.post('/', userController.creatingUser);
module.exports = router;
