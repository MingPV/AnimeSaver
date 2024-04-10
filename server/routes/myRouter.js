const express = require('express')
const router = express.Router()
const path = require('path')

const app = express()
const homepage = path.join(__dirname, '../pages/home.html')
const formpage = path.join(__dirname, '../pages/form.html')
const testObjectPage = path.join(__dirname, '../pages/testObjectPage.html')

const Product = require('../models/products')



router.get("/", (req, res) => {
    res.status(200)
    // res.type('text/html')
    // res.sendFile(homepage)
    res.json({ "foo": "bar", "name": "Mingming", "age": 19 });
})

router.get("/abc", (req, res) => {
    res.status(200)
    // res.type('text/html')
    // res.sendFile(homepage)
    res.json({ "foo": "bar", "name": "abc", "age": 18 });
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
        res.send({ doc })
        // res.render('AnimeList.ejs', { productsA: doc })
    })

})

router.get("/delete/:id", (req, res) => {
    res.status(200)
    console.log(req.params.id)

    Product.findByIdAndDelete(req.params.id, { useFindAndModify: false }).exec(err => {
        if (err) {
            console.log(err)
        }
        res.redirect('/AnimeList')
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