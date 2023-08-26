const jogadores = require('../jogadores')

let contador = 0
const mensagem = ((req, res) => {
    if (contador === jogadores.length) {
        contador = 0
    }
    let nomeDoJogador = jogadores[contador]

    res.send(`É a vez de ${nomeDoJogador} jogar!`)
    contador++
})

const remover = ((req, res) => {
    let { indice } = req.query
    indice = Number(indice)
    if (indice < jogadores.length) {
        jogadores.splice(indice, 1)
        return res.send(jogadores)
    }

    else {
        return res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`)
    }

})

const adicionar = ((req, res) => {
    let { nome, indice } = req.query
    nome = nome.slice(0, 1).toUpperCase() + nome.slice(1).toLowerCase()
    indice = Number(indice)
    if (!indice) {
        jogadores.push(nome)
        return res.send(jogadores)
    }

    if (indice >= jogadores.length) {
        return res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`)
    }

    if (indice) {
        jogadores.splice(indice, 0, nome)
        return res.send(jogadores)
    }

})

module.exports = {
    mensagem,
    remover,
    adicionar
} 