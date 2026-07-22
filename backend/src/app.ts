import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "LMS Backend is running 🚀",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

export default app;