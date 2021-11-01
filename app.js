const express = require('express');
const users = require('./database/users.json');
const app = express();
const port = 3000;
const router = require('./router')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/game', (req, res) => {
    res.render('game');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', (req, res) => {
    const { email, password } = req.body
    const newUser = { email, password }

    users.push(newUser);
    res.status(201).redirect('/login');
})

app.post('/login', (req, res) => {
    const { email, password } = req.body
    for (user of users) {
        if (user.email === email && user.password === password) {
            return res.redirect('/game');
        }
    }
    res.status(400).json({
        message: "wrong email or password"
    })
})

app.listen(port, () => {
    console.log(`listen at port: ${port}`);
})