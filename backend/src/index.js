const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const { handleErrors } = require("./middlewares.js/errorHandler");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

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
		console.log(error.message);
	});

app.use(handleErrors);

app.use("/api/auth", authRoutes);
app.use("/api/feed", userRoutes);
