/**
 * @file The index.js file is the root of the program runtime and
 * deals with server and environment variables.
 */
const http = require('http')
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Contetn-Type': 'text/plain' })
  response.end('Hello World')
})

const PORT = 3001
app.listen(PORT)
console.log(`server running on port: ${PORT}`)
