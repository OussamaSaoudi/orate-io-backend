/**
 * @file Managages user signup and password hashing.
 * @author Yacine Saoudi
 */
const bcrypt = require('bcrypt')
const signupRouter= require('express').Router()
const User = require('../models/user')

signupRouter.post('/', async (request, response) => {
  const body = request.body
  console.log(body)
  const saltRounds = 10


  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User ({
    username: body.username,
    email: body.email,
    passHash: passwordHash
  })
  console.log(user)


  const savedUser=await user.save()

  response.json(savedUser)
})

module.exports=signupRouter
