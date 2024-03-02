const app = require("./app");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 4040;

mongoose
	.connect(process.env.DB_CONN_URL)
	.then(() => {
		console.log("DB connected!");

		app.listen(port, () => console.log("Done!"));
	})
	.catch((err) => console.log(err));
