const express = require('express');

const router = express.Router();


router.use('/api/genre', require('./genre'))

router.use('/api/customer', require('./customer'))

router.use('/api/movie', require('./movie'))

router.use('/api/rental', require('./rental'))

router.use('/api/user', require('./users'))

router.use('/api/auth', require('./auth'))


module.exports = router;
