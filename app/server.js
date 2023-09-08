const express = require('express')
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')

module.exports = (schema) => {
    const app = express()


    app.use(express.json())
    app.all('/', createHandler({schema}))

    return app

}
