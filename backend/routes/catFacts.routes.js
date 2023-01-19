const router = require("express").Router()

const {getCatFacts} = require('../controllers/catFacts.controller')

router.get("/", getCatFacts)

module.exports = router
