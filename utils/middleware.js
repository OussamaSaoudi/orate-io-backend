/**
 * @file Contains the middleware, includes errore handling and request logs.
 * @author Yacine Saoudi
 */
// const jwt = require('jsonwebtoken')

/**
 *.
 * Log of information the user sends to the server.
 *
 * @param {object} request Receives the method path and body.
 * @param {object} response Empty response to be returned.
 * @param {string} request.method Method type of request.
 * @param {string} request.path Url the rerquest is sent to.
 * @param {string} request.body Content of the request.
 * @param {Function} next Next middleware fuunction to be called.
 */
const reqLog = (request, response, next) => {
  console.log('Method: ', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  next()
}
/**
 *.
 * Json error message rerouter.
 *
 * @param {object} request - Receives the error.
 * @param {object} response - Returns error message if url entered is unknown.
 * @param {Function} next Next middleware fuunction to be called.
 */
const unkownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unkown endpoint' })
}
/**
 *.
 * Error handler middleware.
 *
 * @param {object} request - The error.
 * @param {object} response - Returns error message error is returned.
 * @param {Function} next Next middleware fuunction to be called.
 * @param {object} error - The error type received.
 * @returns {error} Returns status code representing error.
 */
const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if (error.name === 'error') {
    return response.status(400).send({ error: 'error name' })
  }
  else if (error.name == 'validationError'){
    return response.status(401).send({ error: 'invalid username or password' })
  }

  next(error)
}

export default {
  reqLog,
  unkownEndpoint,
  errorHandler
}

