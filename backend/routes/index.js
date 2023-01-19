module.exports = app => { 

     const catFactsRouter = require("./catFacts.routes")
    app.use("/api/", catFactsRouter)
}