const express = require("express");

//Database

const database = require("./database");
//initialization
const booky=express();

booky.get("/",(req, res) => {
    return res.json({books: database.books});
});

booky.listen(3000, () => console.log("The server is running"));
