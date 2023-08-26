const express = require('express')
const app = express()
const rotas = require('./roteadores')

app.use(rotas)



app.listen(8000)