import express from "express";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/auth", authRouter);

export default app;
