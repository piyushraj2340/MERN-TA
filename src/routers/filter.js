const express = require('express');

const userModel = require('../models/users');

const router = express.Router();


router.get('/validAgeUser', async (req, res) => {
    try {
        const result = await userModel.find({age: { $gt: 18}});

        if(result) {
            const info = {
                status: true,
                message: "Filter by valid age of user!...",
                result
            }

            res.status(200).send(info);
        } else {
            const info = {
                status: false,
                message: "Not Allowed to Fetch User info!...",
            }

            res.status(405).send(info);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("Server error: not allowed!..");
    }
});



router.get('/byUserId/:_id', async (req, res) => {
    try {
        const {_id} = req.params;
        const result = await userModel.find({_id});

        if(result) {
            const info = {
                status: true,
                message: "filter by user id!...",
                result
            }

            res.status(200).send(info);
        } else {
            const info = {
                status: false,
                message: "Not Allowed to Fetch User info!...",
            }

            res.status(405).send(info);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("Server error: not allowed!..");
    }
});

module.exports = router;