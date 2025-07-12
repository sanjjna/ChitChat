import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5001;

// Handle __dirname in ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Enable CORS only in development
if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
}

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Serve frontend in production
app.use(express.static(path.join(__dirname, "..", "client-dist")));
app.use(express.static(clientPath));

app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "..", "client-dist", "index.html"));
});

// Start server
server.listen(PORT, () => {
  console.log("Server is running on PORT: " + PORT);
  connectDB();
});
