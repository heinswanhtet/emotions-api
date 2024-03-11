const express = require('express')
const { getEmotions, createEmotions } = require('../controllers/emotions')

const router = express.Router()

router.route('/').get(getEmotions).post(createEmotions)

module.exports = router
