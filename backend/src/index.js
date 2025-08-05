const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
const app = express();
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to database successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch (error => {
    console.error(`Error connecting to the database: ${error}`);
    console.log(error.message)
})
