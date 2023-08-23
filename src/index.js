import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000"
   //origin:"https://eqiumentrentalapp.netlify.app"
}));

app.get("/", function (req, res) {
  res.send("<h5>Recepie app</h5>");
});

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://bharath91505:bharath123@cluster10.osghaom.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log("Server started"));

