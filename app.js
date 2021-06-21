const express = require('express')
const app = express()
const cors = require('cors')

const loginRouter = require('./controllers/login')
const signupRouter = require('./controllers/signup')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.json())
app.use('/login', loginRouter)
app.use('/signup', signupRouter)

app.use(middleware.unkownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
