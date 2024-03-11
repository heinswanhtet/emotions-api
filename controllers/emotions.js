const emotions = require('../data')

const getEmotions = (req, res) => {
    res.status(200).json({ success: true, data: emotions })
}

module.exports = { getEmotions }