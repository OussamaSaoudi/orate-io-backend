const app = require('./app')
const http = require('http')
const config = require('./utils/config')


const server = http.createServer(app)


app.get('/', (request, response) => {
  console.log('went through')
  response.json('hello world')
})

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
