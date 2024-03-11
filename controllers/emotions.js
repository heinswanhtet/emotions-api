const emotions = require('../data')

const getEmotions = (req, res) => {
    res.status(200).json({ success: true, data: emotions })
}

const createEmotions = (req, res) => {
    const { id, type, description } = req.body

    if (!(id && type && description)) {
        return res
            .status(400)
            .json({ success: false, msg: 'please provide all required values: id, type, description' })
    }
    res.status(201).json({ success: true, data: [...emotions, { id, type, description }] })
}

module.exports = { getEmotions, createEmotions }