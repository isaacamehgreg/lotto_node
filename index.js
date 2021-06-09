const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express()


app.get('/', function (req, res) {
  res.send('Hello Worlder')
})

app.get('/admin', function (req, res) {
  res.send('you are on admin route')
})

app.get('/agent', function (req, res) {
  res.send('you are on agent route')
})

app.get('/cashier', function (req, res) {
  res.send('you are on cashier')
})
 
app.listen( process.env.PORT || 5000);