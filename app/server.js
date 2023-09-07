const express = require('express')
const { createHandler } = require('graphql-http/lib/use/express')

module.exports = (schema) => {
    const app = express()


    app.use(express.json())
    app.all('/', createHandler({schema}))

    return app

}
