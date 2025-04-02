const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/index.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/index.html'));
})

app.get('/404.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/404.html'));
})

app.get('/blank.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/blank.html'));
})

app.get('/buttons.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/buttons.html'));
})

app.get('/cards.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/cards.html'));
})

app.get('/charts.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/charts.html'));
})

app.get('/forgot-password.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/forgot-password.html'));
})

app.get('/login.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/login.html'));
})

app.get('/register.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/register.html'));
})

app.get('/tables.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/tables.html'));
})

app.get('/utilities-animation.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/utilities-animation.html'));
})

app.get('/utilities-border.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/utilities-border.html'));
})

app.get('/utilities-color.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/utilities-color.html'));
})

app.get('/utilities-other.html', function(req, res) {
    res.sendfile(path.join(__dirname, '/pages/utilities-other.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})