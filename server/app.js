const express = require('express')
const router = require('./routes/myRouter.js')
const path = require('path')
const cors = require('cors')
// import cors from "cors";

const app = express()
app.use(cors());


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type,Accept');
//     next();
// })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false })) // for POST method
app.use(router)


app.listen(3000, () => {
    console.log('Start server at port 3000')
})

