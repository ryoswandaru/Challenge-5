const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/', (req, res) => {
    res.render('game');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/register', (req, res) => {
    res.render('register');
})

router.use(express.static('public'));

module.exports = router;