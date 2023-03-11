const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const genreController = require('../Controller/genreController')
const isAdmin = require('../middleware/admin');

//GET
router.get('/', genreController.getAllGenre)
// router.get('/', res.send("Hii"))

//Getting a particular genre
router.get('/:id', genreController.getSpecificGenre)
//POST
router.post('/', auth, genreController.PostingGenre)
//PUT
router.put("/:id", auth, genreController.updatingGenre)
//Delete
router.delete("/:id", [auth,isAdmin], genreController.deletingGenre)

module.exports = router;
