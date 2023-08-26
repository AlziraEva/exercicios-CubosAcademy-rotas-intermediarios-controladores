const express = require('express')
const app = express()
const { somar, subtrair, multiplicar, dividir } = require('./funcao')

//somar
app.get('/somar', somar)

//subtrair
app.get('/subtrair', subtrair)

//multiplicar
app.get('/multiplicar', multiplicar)

//dividir
app.get('/dividir', dividir)


app.listen(3000)