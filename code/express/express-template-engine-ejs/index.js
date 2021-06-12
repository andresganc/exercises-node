
const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs')

// Route / - with sendFile
app.get( '/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})


// Server listen
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
