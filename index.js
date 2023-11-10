const http = require('node:http')
const fs = require('node:fs')
const PORT = 1234

const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Hola mundo</h1>')
  }else if(req.url === '/contacto'){
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>Contacto</h1>");
  }else if(req.url === "/imagen-corazon.png"){
    fs.readFile('./corazon-amarillo.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>Internal server errror</h1>')
      } else {
        res.setHeader("Content-Type", "image/png");
        res.end(data)       
      }
    })
  } else{
    res.statusCode = 404
    res.end('<h1>404</h1>')
  }
})

server.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}`)
})