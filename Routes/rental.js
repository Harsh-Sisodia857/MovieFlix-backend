const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllRental, postingRental, specificRental } = require('../Controller/rentalController');


router.get('/', getAllRental);

router.post('/', auth, postingRental);

router.get('/:id', specificRental);

module.exports = router; 