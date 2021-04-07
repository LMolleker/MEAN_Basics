const express = require('express');
const router = express.Router();
const beerSchema = require("../schemas/beerSchema");

router.get('/', async (req, res) =>{
    try {
        const beers = await beerSchema.find();
        res.json(beers);
    } catch (error) {
        res.json({message : error})
    }
});

router.post('/', async (req, res) => {
    try {
        const beer = new beerSchema({
            name : req.body.name,
            description : req.body.description,
            price : req.body.price,
            stock : req.body.stock
        })
        const tmpBeer = await beer.save();
        res.json(tmpBeer);
    } catch (error) {
        res.json({message : error})
    }
})

module.exports = router;