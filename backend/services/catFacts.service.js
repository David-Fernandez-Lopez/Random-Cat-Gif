const axios = require('axios')

class CatFactsService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `https://catfact.ninja`
        })
    }

    getCatFact() {
        return this.axiosApp.get(`/fact`)
    }

}

const catFactsService = new CatFactsService()

module.exports = catFactsService