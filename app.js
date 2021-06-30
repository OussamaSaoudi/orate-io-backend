/**
 * @file Where the program is run, contains the middleware, routes, and connects to the database.
 */
const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const loginRouter = require('./controllers/login')
const signupRouter = require('./controllers/signup')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')


const uri = config.MONGODB_URI
  ? config.MONGODB_URI
  : null

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    console.log('connected to mongoDB')
  })

/*
 * Request processing
 */
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.reqLog)
/*
 * Routers
 */
app.use('/login', loginRouter)
app.use('/signup', signupRouter)

/*
 * Error Handling
 */
app.use(middleware.unkownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
