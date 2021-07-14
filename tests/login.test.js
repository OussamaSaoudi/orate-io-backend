/**
 * @file Test file for login controller request handler.
 */
const mongoose = require('mongoose')

const initialAccounts = []

test('initial accounts is empty', async () => {
  expect(initialAccounts).toHaveLength(0)
})


afterAll(() => {
  mongoose.connection.close()
})
