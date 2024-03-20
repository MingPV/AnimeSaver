const express = require('express')
const router = express.Router()
const path = require('path')

const app = express()
const homepage = path.join(__dirname, '../pages/home.html')
const formpage = path.join(__dirname, '../pages/form.html')
const testObjectPage = path.join(__dirname, '../pages/testObjectPage.html')

const Product = require('../models/productsA')



router.get("/", (req, res) => {
    res.status(200)
    res.type('text/html')
    res.sendFile(homepage)
})

router.get("/form", (req, res) => {
    res.status(200)
    res.type('text/html')
    res.sendFile(formpage)
})

router.get("/AnimeList", (req, res) => {
    res.status(200)
    // const product = [
    //     {
    //         Name: "Ming",
    //         age: 19
    //     },
    //     {
    //         Name: "Kim",
    //         age: 17
    //     }
    // ]

    Product.find().exec((err, doc) => {
        res.render('AnimeList.ejs', { productsA: doc })
    })

})

// method  - GET -

// router.get("/recieveForm", (req, res) => {
//     res.status(200)
//     console.log(req.query)
// })

// methos - POST -

app.use(express.urlencoded({ extended: false }));
router.post("/recieveForm", (req, res) => {

    res.status(200)

    let data = new Product({
        animeName: req.body.animeName,
        point: req.body.point
    })


    Product.saveProduct(data, (err) => {
        if (err) console.log(err)
        res.redirect('/')
    })

})

module.exports = router