const books=[
    {
        ISBN: "12345Book",
        title: "Getting Started with MERN",
        pubDate: "2021-07-07",
        language: "en",
        numPage: 250,
        author:[1,2],
        publication:[1],
        category:["tech", "programming","education", "thriller"]
    },
];

const author =[
    {
        id:1,
        name:"Jishnu",
        books: ["12345Book","Secret123"],

    },
    {
        id:1,
        name:"Elon Musk",
        books: ["12345Book"],  
    },
];

const publications = [
    {
        id:1,
        name:"writex",
        books:["12345Book"],
    },
];

module.exports = {books, author, publications};