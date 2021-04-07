const express = require('express');
const router = express.Router();
const saleSchema = require("../schemas/saleSchema");

router.get('/', async (req, res) =>{
    try {
        const sales = await saleSchema.find();
        res.json(sales);
    } catch (error) {
        res.json({message : error});
    }
});

router.post('/', async (req, res) =>{
    try {
        const sale = new saleSchema({
            name : req.body.name,
            address : req.body.address,
            totalPrice : req.body.totalPrice,
            items : req.body.items
        })
        const tmpSale = await sale.save();
        res.json(tmpSale);
    } catch (error) {
        res.json({message : error});
    }
});

module.exports = router;