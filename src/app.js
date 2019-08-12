const path = require('path');
const express = require('express');
const hbs = require('hbs')

const app = express();
const port = process.env.PORT || 3000

// define express paths
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// set up views
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'SarthakC'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Aboot',
        name: 'SarthakC'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'Clean code is something that I have been interested in for a while now, and plan to write a series of blog posts about the different concepts related to clean code. In this introduction post to the series I will talk a little bit about what clean code actually is and also try to answer the question why should you care about clean code.',
        name: 'SarthakC'
    })
})


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    res.send({
        forecast: 'Snowing',
        location: 'Delhi',
        address: req.query.address
    })
})

// app.get('/products', (req, res) => {
//     res.send({
//         products: []
//     })
// })

app.get('/help/*', (req, res) => {
    res.render('404', {
        text: 'Help document not found.',
        name: 'SarthakC'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        text: 'Page not found.',
        name: 'SarthakC'
    })
})

app.listen(port, () => {
    console.log('Server is up on port' + port)
})