const express = require('express')
const cors = require('cors')
const app = express()
const port = 80

app.use(cors())

app.use(express.static('./'))

app.listen(port, () => {
    console.log('Web server running on port 80, go to your browser and navigate to localhost/demoName')
})