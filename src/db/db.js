const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@assignment.irsabln.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log("Connected to Database!..");
}).catch((error) => {
    console.log(error);
})