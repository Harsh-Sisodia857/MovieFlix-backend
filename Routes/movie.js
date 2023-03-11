const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const movieController = require('../Controller/movieController');


//GET
router.get('/', movieController.getAllMovie)
//Getting a particular customer
router.get('/:id', movieController.getSpecificMovie)
//POST
router.post('/', auth , movieController.PostingMovie)
//PUT
router.put("/:id", auth , movieController.updatingMovie)
//Delete
router.delete("/:id", auth , movieController.deletingMovie)

module.exports = router;
