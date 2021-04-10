const express = require("express");
const router = express.Router();
const Photo = require("../schemas/photoSchema");
const multer = require("../middlewares/multerMiddleware");

router.get("/", async (req, res) => {
    try {
        const photos = await Photo.find();
        res.json(photos);
    } catch (error) {
        res.json({message : error});
    }
})

router.post("/", multer.single("photo"), async (req, res) => {
    try {
        const photo = new Photo({
            path : req.file.filename
        })
        let tmpPhoto = await photo.save();
        res.redirect("localhost:4200/photos");
    } catch (error) {
        res.json({message : error});
    }
})

module.exports = router;