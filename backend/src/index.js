const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

const User = require('./models/userModel');

// const deleteUsers = async () => {
//     try{
//         const users = await User.find();
//         for(let i = 0;i<users.length;i++){
//             const userId = users[i]._id;
//             await User.findByIdAndDelete(userId);
//         }
//         return {
//             success : true,
//             message: "Users deleted succesfully"
//         }
//     }catch (error) {
//         console.log("Error while deleting users");
//         console.log(error.message)
//     }
// }


dotenv.config();
const app = express();
const PORT = process.env.PORT

app.use(express.json());

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


app.use('/api/auth',authRoutes)
app.use('/api/feed',userRoutes)


