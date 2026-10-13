const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        author: {
            type: String,
            required: true,
            trim: true
        },
        genre: {
            type: String,
            enum: ["fiction", "science", "history", "technology", "other"],
            default: "other"
        },
        publishedYear: {
            type: Number,
            min: 1000
        },
        shelfLocation: {
            type: String
        },
        totalCopies: {
            type: Number,
            required: true,
            min: 1
        },
        availableCopies: {
            type: Number,
            min: 0,
            default: 1
        },
        isAvailable: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

BookSchema.index({ title: 1, author: 1 }, { unique: true });

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;