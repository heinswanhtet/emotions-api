const express = require('express')
const emotions = require('./routes/emotions')

const app = express()

app.use('/api/v1/emotions', emotions)

app.listen('5001', () => {
    console.log('Server is listening on port 5001...')
})