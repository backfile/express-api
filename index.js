const http = require('node:http')
const PORT = 1234



const server = http.createServer((req, res)=>{
  console.log('Request received', req.url)
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end('Holá mundo')
})

server.listen(PORT	, ()=>{
  console.log(`Server listening on port ${PORT}`)
})