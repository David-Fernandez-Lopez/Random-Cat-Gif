
const catFactsService = require('../services/catFacts.service')
const giphyService = require('../services/giphy.service')

const getCatFacts = (rep, res, next) => {

    let fact

    catFactsService
        .getCatFact()
        .then(({data}) => data.fact)
        .then(newfact => {

            fact = newfact
            return giphyService.getGifByFact(fact)
        })
        .then(( url ) => {

            const data = {url, fact}
            res.json(data)
        })
        .catch(err => {
            next(err)
        })
}

module.exports = {
    getCatFacts
}