const express = require('express')
const routes = require('./routes')
const path = require('path')

//swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My Awesome API for 43th class",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:8080"
            }
        ]
    },
    // apis: [`${path.join(__dirname, "./routes.js")}`]
    apis: [`${path.join(__dirname, "./doc/getProducts.yaml")}`]
}

const app = express()

app.use(express.json())
app.use(routes)
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

module.exports = app