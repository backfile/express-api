const express = require('express')
const app = express()
const PORT = 1234

app.get('/', (req, res)=>{
    // express detecta el content type que debe utilizar
    res.send('<h1>Mi pagina</h1>')
})

app.get('/json', (req, res)=>{
    // content type y stringify automatico
    res.json({message: 'Hola'})
})

app.post('/pokemon', (req, res)=>{
    let body = ''

    // escuchar el evento data
    req.on('data', chunk => {
        body += chunk.toString()
    })

    req.on('end', () => {
        const data = JSON.parse(body)
        console.log(data)
        res.status(201).json(data)
    })
})

app.listen(PORT, ()=>{
    console.log('Server listening')
})