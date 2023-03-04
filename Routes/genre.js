const express = require('express');
const router = express.Router();
const genreController = require('../Controller/genreController')


//GET
router.get('/',genreController.getAllGenre)
// router.get('/', res.send("Hii"))

//Getting a particular genre
router.get('/:id',genreController.getSpecificGenre)
//POST
router.post('/',genreController.PostingGenre)
//PUT
router.put("/:id",genreController.updatingGenre)
//Delete
router.delete("/:id",genreController.deletingGenre)

module.exports = router;
