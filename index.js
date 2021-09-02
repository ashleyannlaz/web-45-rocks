const express = require('express')
const cors = require('cors')
const server = express()

const PORT = process.env.PORT || 5000

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(`<h1>Web 45 Rocks</h1>`)
})

server.get('/api', (req, res)=> {
    res.json({message: 'Web 45 is awesome!'})
})

server.listen(PORT,()=> {
    console.log('listening on port 5000')
})