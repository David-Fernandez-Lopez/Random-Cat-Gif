const axios = require('axios')

const factShortener = require('../utils/factShortener')

const API_KEY = process.env.GIPHY_API_KEY 

class GiphyService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: 'https://api.giphy.com/v1/gifs/'
        })
    }

    getGifByFact(fact) {

        const shortenedFact = factShortener(fact)

        return this.axiosApp
            .get(`/random?api_key=${API_KEY}&tag=${shortenedFact}`)
            .then(({data}) => {
                const images = data.data.images.original.webp
                return images
            })
            .catch(err => console.log(err))
    }
}

const giphyService = new GiphyService()

module.exports = giphyService