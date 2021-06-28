/**
 * @file Test file.
 * @author Yacine Saoudi
 */
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app.js')
/*
 * const loginRouter=require('../controllers/login.js')
 * const api = supertest(app)
 */

const initialAccounts = [
]

test('initial accounts is empty', async () => {
  expect(initialAccounts).toHaveLength(0)
})


afterAll(() => {
  mongoose.connection.close()
})
