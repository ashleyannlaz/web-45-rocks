require('dotenv').config() // this allows to stash artificial env variables in a file
const path = require('path')
const express = require('express')
const cors = require('cors')
const server = express()

console.log(process.env.LADY)

const PORT = process.env.PORT || 5000

server.use(express.json())
server.use(cors())
// supply something that will work correctly regardless
// of environment
server.use(express.static(path.join(__dirname, 'client/build')))

server.get('/', (req, res) => {
    res.send(`<h1>Web 45 Rocks</h1>`)
})

server.get('/api', (req, res)=> {
    res.json({message: 'Web 45 is awesome!'})
})

server.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    // send the build folder from the client
    // all of this constructs a path to index.html in build
})

server.listen(PORT,()=> {
    console.log(`listening on port ${PORT}`)
})