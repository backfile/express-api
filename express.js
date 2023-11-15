const express = require('express')
const app = express()
const PORT = 1234

app.get('/', (req, res)=>{
    // express detecta el content type que debe utilizar
    res.send('<h1>Mi pagina</h1>')
})

app.listen(PORT, ()=>{
    console.log('Server listening')
})