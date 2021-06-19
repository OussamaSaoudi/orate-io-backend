/**
 * @file The index.js file is the root of the program runtime and
 * deals with server and environment variables.
 */
//
//
const http = require('http')
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Contetn-Type': 'text/plain' })
  response.end('Hello World')
})
 // bad code
 let st = "more bad code"
const PORT = 3001
app.listen(PORT)
console.log(`server running on port: ${PORT}`)
