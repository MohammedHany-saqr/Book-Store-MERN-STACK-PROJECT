const express = require("express");
const router = express.Router();
const Book = require('../models/bookModel');
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({}, { __v: false });
    res.status(200).json({ count: books.length, data: books });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
   if (
     !req.body.title ||
     !req.body.author ||
     !req.body.publishYear
   ) {
     return res
       .status(400)
       .json(
         "Send all required fields: title, author, publishYear"
       );
   }
    const title = req.body.title;
    const author = req.body.author;
    const publishYear = req.body.publishYear;
    const createdAt =2000;
    const updatedAt =2020;
    const newBook = { title, author, publishYear, createdAt, updatedAt };
    const book = await Book.create(newBook);
    res.status(201).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear 
    ) {
      return res
        .status(400)
        .json(
          "Send all required fields: title, author, publishYear"
        );
    }
    const id = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body);
    if (!updatedBook) res.status(404).json("Book Not Found!");
    else res.status(200).json("Book updated successfully!");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) res.status(404).json("Book Not Found!");
    else res.status(200).json("Book deleted successfully!");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;