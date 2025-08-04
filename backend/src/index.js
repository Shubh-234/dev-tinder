const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT

app.use('/hello', (req,res) => {
    console.log(req);
    res.send('testing')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})