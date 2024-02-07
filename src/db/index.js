const mongoose = require('mongoose')

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_AUTH_SOURCE } = require('../config')

let uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=${DB_AUTH_SOURCE}`
mongoose.connect(uri)

mongoose.connection.on('connected', function () {
    // require('../../dbMutation')
    console.log('Mongoose connected')
})
mongoose.connection.on('error', function (error) {
    console.log('Mongoose connection error', error)
})
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected')
})
