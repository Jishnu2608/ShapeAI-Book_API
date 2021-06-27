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
Route           /is
Description     get specific books based on ISBN
Access          public
Parameter       ISBN
Methods         GET
*/

booky.get("/is/:ISBN",(req, res) => {
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

/* 
Route           /author
Description     get all authors
Access          public
Parameter       none
Methods         GET
*/

booky.get("/author",(req,res) => {
    return res.json({authors: database.author});
});

/* 
Route           /author/book
Description     get all authors based on books
Access          public
Parameter       ISBN
Methods         GET
*/

booky.get("/author/book/:ISBN", (req,res) =>{
    const getSpecificAuthor = database.author.filter((author) => 
    author.books.includes(req.params.ISBN)
    );
    if(getSpecificAuthor.length===0) {
        return res.json({error:`No author found for the book of ${req.params.ISBN}`,
    });
    };

    return res.json({book:getSpecificAuthor});
});

/* 
Route           /publications
Description     get all publications
Access          public
Parameter       none
Methods         GET
*/

booky.get("/publications",(req,res) => {
    return res.json({publications: database.publications});
});

booky.listen(3000, () => console.log("The server is running"));
