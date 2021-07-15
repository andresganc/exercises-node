
const express = require('express')
const app = express()
const port = 3000

// Route / - with sendFile
app.get( '/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
