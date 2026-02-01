const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const requestRoutes = require("./routes/requestRoutes");

const { handleErrors } = require("./middlewares.js/errorHandler");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.use(express.json());
app.use(cookieParser());

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("Connected to database successfully");
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.error(`Error connecting to the database: ${error}`);
		console.log(error);
	});

app.use(handleErrors);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/request", requestRoutes);
