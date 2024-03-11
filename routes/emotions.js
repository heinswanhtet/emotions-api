const express = require('express')
const {
    getEmotions,
    createEmotions,
    updateEmotion,
    deleteEmotion,
    getSingleEmotion
} = require('../controllers/emotions')

const router = express.Router()

router.route('/').get(getEmotions).post(createEmotions)
router.route('/:id').put(updateEmotion).delete(deleteEmotion).get(getSingleEmotion)

module.exports = router
