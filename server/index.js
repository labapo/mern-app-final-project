import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/users.js";
import profileRouter from './routes/profiles.js';
import cors from "cors";
//initialize express app
const app = express();

//initialize dotenv
dotenv.config();

//-------------------------MIDDLEWARE---------------------------//
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: false })); //makes sure that you can get inside of the object and so that its not undefined
app.use(cors());

//use express middleware to connect to the application
app.use("/", userRouter);
app.use('/', profileRouter);

//middleware to connect 

//-------------------------CONNECTIONS---------------------------//
const CONNECTION_URL =
  "mongodb+srv://labapo:Missy217!@sei.xkd1rlx.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5500;

mongoose.set("strictQuery", true);
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server run on port: ${PORT} and connected to mongoose`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
