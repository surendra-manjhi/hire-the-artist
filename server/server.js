import app from "./app.js";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 4040;

mongoose
	.connect(process.env.DB_CONN_URL)
	.then(() => {
		console.log("DB connected!");

		app.listen(port, () => console.log("Done!"));
	})
	.catch((err) => console.log(err));
