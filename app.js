const express = require('express')
const app = express();

const path = require('path')

app.listen(process.env.PORT || 3000, () => {
    console.log('Se prendió!');
})

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, 'views/index.html'))
})

app.use(express.static('public'))
app.use(express.static('views'))

app.get('*', function (request, response) {
    response.send('NOT FOUND', 404)
})




