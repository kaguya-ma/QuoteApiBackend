const express = require('express')
const app = express()
const cors = require('cors')

const port = 3000

app.use(cors())

const data = require("./data.json")

app.get('/quotes/data.json', (req, res, next) => {
    res.json(data)
    next()
})





app.listen(port, () => {
    console.log('Server was launched on port 3000')
})