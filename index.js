const express = require("express");
const path = require("path");
const http = require("http");

const api = require("./api/api")

app = express()

app.use(express.static(path.join(__dirname, 'frontend/dist/cfcp')))

const port = process.env.PORT || "3000"
app.set('port', port);

app.use('/api', api)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/dist/cfcp/index.html"))
})

const server = http.createServer(app)

server.listen(port, () => console.log(`Running on localhost:${port}`))

module.exports = {app}