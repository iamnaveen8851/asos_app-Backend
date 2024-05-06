const express = require("express");
const cors = require("cors");
require("dotenv").config()
const connectDb = require("./config/connectDb");
const userRouter = require("./routes/userRouter");
const productsRouter = require("./routes/productsRouter");


const app = express();

app.use(express.json());  
app.use(express.cors())
app.use('/users', userRouter)
app.use('/products', productsRouter)

const PORT = process.env.PORT || 8080;




app.get("/", (req, res) => {
  res.send("Welcome to the server");
});



app.listen(PORT, async () => {
  try {
    await connectDb
    console.log(`Server is listening on ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
