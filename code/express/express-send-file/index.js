
const express = require('express')
const app = express()
const port = 3000

// Route / - with sendFile
app.get( '/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Route /about - with sendFile
app.get( '/about', (req, res) => {
    res.sendFile(__dirname + '/static/about.html')
})

// Route /contact - with sendFile
app.get( '/contact', (req, res) => {
    res.sendFile(__dirname + '/static/contact.html')
})


// Server listen
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
