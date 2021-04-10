const express = require("express");
const { route } = require("./photosRoute");
const fs = require("fs");
const router = express.Router();
const path = require("path");

router.get("/", (req,res) =>{
    try {
        res.writeHead(200, {"Content-Type" : "video/mp4"})
        res.sendFile(path.normalize(__dirname, "../public/videos/video.mp4"))
    } catch (error) {
        res.json({message : "error:" + error})
    }
})

module.exports = router;