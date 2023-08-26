const express = require('express')
const { mensagem, remover, adicionar } = require('./controladores/funcao')
const app = express()


app.get('/', mensagem)

app.get('/remover', remover)

app.get('/adicionar', adicionar)

app.listen(8000)