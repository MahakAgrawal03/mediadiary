import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoute from "./Routes/AuthRoute.js"
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import UploadRoute from "./Routes/UploadRoute.js"
// Routes

const app = express();

// to serve images for public
app.use(express.static('public'))
app.use('/images',express.static("images"))

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();

const PORT=process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Listening at ${PORT}`)
    )
  )
  .catch((error) => console.log(error));


//usage of routes


app.use('/auth',AuthRoute);
app.use('/user',UserRoute);
app.use('/post',PostRoute);
app.use('/upload',UploadRoute)


if(process.env.NODE_ENV=="production"){
  app.use(express.static("socialmediaapp/build"))
}

// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`);
// });
