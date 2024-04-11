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
    res.json({ "foo": "bar", "name": "Mingming", "age": 19 });
})

router.get("/abc", (req, res) => {
    res.status(200)
    res.json({ "foo": "bar", "name": "abc", "age": 18 });
})

router.get("/AnimeList", (req, res) => {
    res.status(200)

    Product.find().exec((err, doc) => {
        res.send({ doc })
    })

})

router.post("/deleteAnime", async (req, res) => {

    const animeid = req.body.deleteId;
    console.log(req.body.deleteId);

    Product.deleteOne({ _id: animeid }).exec(err => {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })

    res.status(200)

})

app.use(express.urlencoded({ extended: false }));


router.post("/recieveForm", async (req, res) => {

    let data = new Product({
        animeName: req.body.name,
        point: req.body.point
    })

    console.log(data)

    await Product.saveProduct(data, (err) => {
        if (err) console.log(err)
        res.redirect('/')
    })

    res.status(200)

})



module.exports = router