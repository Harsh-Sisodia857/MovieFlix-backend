const express = require('express');
const router = express.Router();
const { getAllRental, postingRental, specificRental } = require('../Controller/rentalController');


router.get('/', getAllRental);

router.post('/', postingRental);

router.get('/:id', specificRental);

module.exports = router; 