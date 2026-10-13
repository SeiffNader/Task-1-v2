const express = require("express");
const {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
    getRecentBooks
} = require("../controllers/book.controller.js");

const router = express.Router();

router.get("/recent", getRecentBooks);

router.get("/", getBooks);
router.get("/:id", getBook);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;