const express = require('express');
const router = express.Router();
const customerController = require('../Controller/customerController')


//GET
router.get('/', customerController.getAllCustomer)

//Getting a particular customer
router.get('/:id', customerController.getSpecificCustomer)
//POST
router.post('/', auth, customerController.PostingCustomer)
//PUT
router.put("/:id", auth, customerController.updatingCustomer)
//Delete
router.delete("/:id", auth, customerController.deletingCustomer)

module.exports = router;
