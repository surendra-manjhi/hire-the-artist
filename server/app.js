import express from "express";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";

	res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});

export default app;
