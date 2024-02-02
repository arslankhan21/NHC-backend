const router = require('express').Router()
// const { jwtValidators } = require('../middlewares')

const unauthorized = require('./unauthorized')

router.use(unauthorized)

module.exports = router