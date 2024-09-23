const express = require("express");
const { PORT, MONGO_URL } = require("./config.js");
const mongoose = require("mongoose");
const Book = require("./models/bookModel.js");
const booksRoute = require('./routes/booksRoute.js');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  console.log(req);
  res.status(234).json("Welcome To MERN Project!");
});
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("App connected to database!");
  })
  .catch((err) => {
    console.log(err);
   
  });
app.use("/books", booksRoute);
app.listen(3000, () => {
  console.log(`App is listening to port: ${PORT}`);
});
