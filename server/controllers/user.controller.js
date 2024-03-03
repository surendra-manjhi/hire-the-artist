import User from "../models/user.model.js";

export const test = (req, res) => {
	try {
		return res.status(200).json({
			status: "success",
		});
	} catch (err) {
		console.log(err.message);
	}
};
