const express = require('express');

const userModel = require('../models/users');

const router = express.Router();

router.route('/users')
    .post(async (req, res) => {
        try {
            const newUser = new userModel(req.body);
            const result = await newUser.save();

            if (result) {
                const info = {
                    status: true,
                    message: "New User Created!...",
                    result
                }

                res.status(201).send(info);
            } else {
                const info = {
                    status: false,
                    message: "Not Allowed To Register!...",
                }

                res.status(405).send(info);
            }
        } catch (error) {
            console.log(error);
            res.status(500).send("Server error: not allowed!..");
        }
    })
    .patch(async (req, res) => {
        try {
            const { _id, name, email, mobileNumber, age, gender } = req.body;
            const result = await userModel.findOneAndUpdate({ _id }, {
                $set: {
                    name,
                    email,
                    mobileNumber,
                    age,
                    gender
                }
            },
            { 
                returnOriginal: false 
            });


            if (result) {
                const info = {
                    status: true,
                    message: "User Info updated!...",
                    result
                }

                res.status(200).send(info);
            } else {
                const info = {
                    status: false,
                    message: "Not Allowed to Update User info!...",
                }

                res.status(405).send(info);
            }
        } catch (error) {
            console.log(error);
            res.status(500).send("Server error: not allowed!..");
        }
    })
    .delete(async (req, res) => {
        try {
            const { _id } = req.body;
            const result = await userModel.findOneAndDelete({ _id });

            if (result) {
                const info = {
                    status: true,
                    message: "user deleted successfully!...",
                }

                res.status(200).send(info);
            } else {
                const info = {
                    status: false,
                    message: "Not Allowed to Delete User info!...",
                }

                res.status(405).send(info);
            }
        } catch (error) {
            console.log(error);
            res.status(500).send("Server error: not allowed!..");
        }
    })
    .get(async (req, res) => {
        try {
            const result = await userModel.find();

            if (result) {
                const info = {
                    status: true,
                    message: "List of all the user!...",
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
