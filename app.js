const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')



app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, 'views/index.html'))
})

app.use(express.static('public'))
app.use(express.static('views'))

app.get('*', function (request, response) {
    response.send('NOT FOUND', 404)
})

app.listen(port, function () {
    console.log('Se prendió');
})

