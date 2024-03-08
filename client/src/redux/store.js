import { configureStore } from "@reduxjs/toolkit";
import userRouter from "./user/userSlice.js";

export const store = configureStore({
	reducer: {
		user: userRouter,
	},
});
