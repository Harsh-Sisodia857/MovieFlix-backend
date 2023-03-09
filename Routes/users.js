const express = require("express");
const router = express.Router();
const userController = require('../Controller/userController');


//creating user
router.post('/', userController.creatingUser);

module.exports = router;
