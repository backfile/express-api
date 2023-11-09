const http = require('node:http')
const PORT = 1234

const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Holá mundo</h1>')
  }
})

server.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}`)
})