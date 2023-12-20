const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose");


const Routes = require("./Routes/index");

const port= 4500;

app.use(cors());
app.use(express.json());

app.use("/", Routes);

mongoose.connect("mongodb+srv://ashifktashifkt4697:BJtsngYbfdbwC9gR@cluster0.mcvsobd.mongodb.net/")
  .then(() => console.log('Database Connected!'));



  

app.listen(port, () => {
console.log("server started at 4000")
});   