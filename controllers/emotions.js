let emotions = require('../data')

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

const updateEmotion = (req, res) => {
    const { id } = req.params
    const { type, description } = req.body

    const emotion = emotions.find((emotion) => emotion.id === Number(id))

    if (!emotion) {
        return res
            .status(404)
            .json({ success: false, msg: `no emotion with id: ${id}` })
    }

    const newEmotion = emotions.map((emotion) => {
        if (emotion.id === Number(id)) {
            if (type) {
                emotion.type = type
            }
            if (description) {
                emotion.description = description
            }
        }
        return emotion
    })

    res.status(200).json({ success: true, data: newEmotion })
}

const deleteEmotion = (req, res) => {
    const { id } = req.params

    const emotion = emotions.find((emotion) => emotion.id === Number(id))

    if (!emotion) {
        return res
            .status(404)
            .json({ success: false, msg: `no emotion with id: ${id}` })
    }

    const newEmotion = emotions.filter((emotion) => emotion.id !== Number(id))

    res.status(200).json({ success: true, data: newEmotion })
}

const getSingleEmotion = (req, res) => {
    const { id } = req.params

    const singleEmotion = emotions.find((emotion) => emotion.id === Number(id))

    if (!singleEmotion) {
        return res
            .status(404)
            .json({ success: false, msg: 'Requested emotion does not exist' })
    }
    res.status(200).json({ success: true, data: singleEmotion })
}

module.exports = {
    getEmotions,
    createEmotions,
    updateEmotion,
    deleteEmotion,
    getSingleEmotion
}