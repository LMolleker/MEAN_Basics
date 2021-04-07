const express = require("express");
const router = express.Router();
const Photo = require("../schemas/photoSchema");
const multer = require("../middlewares/multerMiddleware");

router.get("/", (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

router.post("/", multer.single("photo"), (req, res) => {
    try {
        res.json({message : req.file});
    } catch (error) {
        res.json({message : error});
    }
})

module.exports = router;