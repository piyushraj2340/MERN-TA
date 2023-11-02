require('dotenv').config();
const express = require('express');
const path = require('path');
require('./db/db');

const userRoute = require('./routers/routes');
const filter = require('./routers/filter');

const app = express();

app.use(express.json());
// app.use(express.static());
app.use(userRoute);
app.use('/filter', filter);


if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
} else {
    app.use(express.static(path.resolve(__dirname, 'client')));
}



app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client' , 'index.html'));
})



app.listen(8000,() => {
    console.log("listening on 8000");
})