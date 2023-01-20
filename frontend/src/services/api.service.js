import axios from 'axios'

class CatFactsService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api`
        })
    }

    getData() {
        return this.api.get(`/`)
    }
}

const catFactsService = new CatFactsService()

export default catFactsService