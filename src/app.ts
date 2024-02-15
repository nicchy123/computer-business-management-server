import cors from "cors";
import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
import notFound from "./app/middlewares/notfound";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", 
    // origin: "https://computer-business-management.vercel.app",
    credentials: true,
  })
);

// application routes
app.use("/api/v1", router);
app.get("/", async(req, res) => {
  return res.json({
    message: "Hello World!",
  });
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
