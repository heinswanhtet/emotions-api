const express = require('express')
const { getEmotions, createEmotions, updateEmotion } = require('../controllers/emotions')

const router = express.Router()

router.route('/').get(getEmotions).post(createEmotions)
router.route('/:id').put(updateEmotion)

module.exports = router
