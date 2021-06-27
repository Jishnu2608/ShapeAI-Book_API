const express = require("express");

//Database

const database = require("./database");
//initialization
const booky=express();

/* 
Route           /
Description     get all books
Access          public
Parameter       None
Methods         GET
*/

booky.get("/",(req, res) => {
    
    return res.json({books: database.books});
});

/* 
Route           /
Description     get specific books based on ISBN
Access          public
Parameter       ISBN
Methods         GET
*/

booky.get("/:ISBN",(req, res) => {
    const getSpecificBook = database.books.filter((book) => 
    book.ISBN ===req.params.ISBN);
    if(getSpecificBook.length===0) {
        return res.json({error:`No book found for the ISBN of ${req.params.ISBN}`,
    });
    }

    return res.json({book:getSpecificBook});

});

/* 
Route           /c
Description     get specific books based on category
Access          public
Parameter       category
Methods         GET
*/

booky.get("/c/:category", (req,res) => {
    const getSpecificBook = database.books.filter((book) => 
    book.category.includes(req.params.category)
    );
    if(getSpecificBook.length===0) {
        return res.json({error:`No book found for the category of ${req.params.category}`,
    });
    }

    return res.json({book:getSpecificBook});
});

booky.listen(3000, () => console.log("The server is running"));
