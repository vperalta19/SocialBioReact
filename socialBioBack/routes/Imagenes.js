//Imports
const express = require('express');
const router = express.Router();

const con = require('../Database');
//---------------------------------------

const { cloudinary } = require('../services/img.service');

router.post('/imagenUpload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr);
        console.log(uploadResponse.secure_url);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

module.exports = router;