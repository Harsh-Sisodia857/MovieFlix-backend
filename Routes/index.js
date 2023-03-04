const express = require('express');

const router = express.Router();


router.use('/api/genre', require('./genre'))

router.use('/api/customer',require('./customer'))

module.exports = router;
