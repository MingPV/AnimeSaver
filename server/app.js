const express = require('express')
const router = require('./routes/myRouter.js')
const path = require('path')
const cors = require('cors')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true })) // for POST method
app.use(router)


app.listen(3000, () => {
    console.log('Start server at port 3000')
})

