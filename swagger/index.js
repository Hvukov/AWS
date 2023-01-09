const express = require("express")
const swaggerUI = require("swagger-ui-express")
const YAML = require("yamljs")
const swaggerJSDocs = YAML.load("./api.yaml")
const app = express()

app.use("/app-docs", swaggerUI.serve, swaggerUI.setuo(swaggerJSDocs))
app.listen(4000, () => console.log("Running"))
