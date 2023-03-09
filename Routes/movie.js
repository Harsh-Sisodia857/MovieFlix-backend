const express = require("express");
const router = express.Router();
const movieController = require('../Controller/movieController');


//GET
router.get('/', movieController.getAllMovie)
//Getting a particular customer
router.get('/:id', movieController.getSpecificMovie)
//POST
router.post('/', movieController.PostingMovie)
//PUT
router.put("/:id", movieController.updatingMovie)
//Delete
router.delete("/:id", movieController.deletingMovie)

module.exports = router;
