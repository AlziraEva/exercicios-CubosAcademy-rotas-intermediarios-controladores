const imoveis = require('../dados/imoveis')

const mostrarTodosImoveis = ((req, res) => {

    return res.send(imoveis)
})

const idImovel = ((req, res) => {
    const { id } = req.params
    const idEncontrado = imoveis.find((imovel) => {
        return imovel.id === Number(id)
    })
    res.send(idEncontrado)
})

module.exports = {
    mostrarTodosImoveis,
    idImovel
}
