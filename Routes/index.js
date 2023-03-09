const express = require('express');

const router = express.Router();


router.use('/api/genre', require('./genre'))

router.use('/api/customer', require('./customer'))

router.use('/api/movie', require('./movie'))

router.use('/api/rental', require('./rental'))

router.use('/api/user', require('./users'))



module.exports = router;
