import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import feedReducer from "./slice/feedSlice";

export default configureStore({
	reducer: {
		user: userReducer,
		feed: feedReducer,
	},
});
