const express = require('express')
const rotas = express()
const { mostrarTodosImoveis, idImovel } = require('./controladores/funcao')

rotas.get('/imoveis', mostrarTodosImoveis)

rotas.get('/imoveis/:id', idImovel)

module.exports = rotas