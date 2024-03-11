const express = require('express')
const { getEmotions } = require('../controllers/emotions')

const router = express.Router()

router.route('/').get(getEmotions)

module.exports = router
