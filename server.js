const express = require('express')
const path = require("path")

let initialPath = path.join(__dirname, "public");
let app = express();

app.use(express.static(initialPath));

app.get('/', function (req, res) {
  res.sendFile(path.join(initialPath, "index.html"))
})

app.listen('3000', () => {
    console.log('listening port...')
})