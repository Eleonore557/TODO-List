const express = require('express')
const app = express()
var config = require('./db.json');
app.get('/', function (req, res) {
  res.send(config)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3001!')
})
