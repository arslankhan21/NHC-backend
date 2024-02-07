const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')

// connect with db
require('./db')

const { PORT } = require('./config')
const routes = require('./routes')

//Sever config
const app = express()
const http = require('http').Server(app)

app.use(cors())

// for parsing application/json
app.use(bodyParser.json())

// For backend APIs
app.use('/api', routes)

http.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})