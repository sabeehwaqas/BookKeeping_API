const express = require("express");


//DATEBASE
const database = require("./Database");



const booky = express();

/*
Route               /
Description         Get all the books
Access              PUBLIC
Parameter           NONE
Methods             GET
*/
booky.get("/",(req,res) =>{
    
    return res.json({AllBooks: database.books});
});


/*
Route               /is
Description         Get specific book on bases of ispn
Access              PUBLIC
Parameter           isbn
Methods             GET
*/
booky.get("/is/:isbn",(req,res) =>{
    
    const getSpecificBook = database.books.filter(
        (book) =>book.ISBN === req.params.isbn
    );
    
    if(getSpecificBook.length === 0){
        return res.json({error: `No book found for the ISBN of ${req.params.isbn} `});
    }

    return res.json({thebook: getSpecificBook});
});


/*
Route               /cat
Description         Get specific book on bases of category
Access              PUBLIC
Parameter           category
Methods             GET
*/

booky.get("/cat/:category",(req,res) =>{
    const getSpecificBook = database.books.filter(
        (book) => book.category.includes(req.params.category)
    )

    if(getSpecificBook.length ===0){
        return res.json({error:`No book found for the category of ${req.params.category}`})
    }

    return res.json({book:getSpecificBook})
})

/*
Route               /lan
Description         Get specific book on bases of language
Access              PUBLIC
Parameter           category
Methods             GET
*/

booky.get("/lan/:language",(req,res) =>{
    const getSpecificBook = database.books.filter(
        (book) => book.lang === req.params.language
    )

    if(getSpecificBook.length === 0){
        return res.json({error:`No book found with language ${req.params.language}`})
    }

    return res.json({book:getSpecificBook})
})



//////////////////////

/*
Route               /author
Description         Get All authors
Access              PUBLIC
Parameter           NONE
Methods             GET
*/

booky.get("/author",(req,res) =>
{
    return res.json({author:database.author})
})


/*
Route               /author/id
Description         Get specific author on the bases of id
Parameter           id
Methods             GET
*/

booky.get("/author/id/:id",(req,res) =>
{
    const getSpecficAuthor = database.author.filter(
        (authors) => authors.id === req.params.id
    )

    if(getSpecficAuthor.length === 0){
        return res.json(`No Author Found with id ${req.params.id}`)
    }

    return res.json({author:getSpecficAuthor})
})


/*
Route               /author/book
Description         Get specific author on the bases of books
Parameter           isbn
Methods             GET
*/

booky.get("/author/book/:isbn",(req,res) => {
    const getSpecficAuthor = database.author.filter(
    (author) => author.books.includes(req.params.isbn)
    )

    if(getSpecficAuthor.length === 0){
        return res.json({error:`No author found for the book of isbn ${req.params.isbn}`})
    }

    return res.json({author:getSpecficAuthor})
})

//////////////////////////////


/*
Route               /publication
Description         Get all publications
Parameter           NONE
Methods             GET
*/

booky.get("/publication",(req,res) => {
    return res.json({publication:database.publication})
})


/*
Route               /publication/id
Description         Get specific publication based on id
Parameter           id
Methods             GET
*/

booky.get("/publication/id/:id",(req,res) =>{
    const getSpecficPublication = database.publication.filter(
        (publication) => publication.id === req.params.id
    )

    if(getSpecficPublication.length === 0){
        return res.json({error:`No Publication found with id ${req.params.id}`})
    }

    return res.json({publication:getSpecficPublication})
})

/*
Route               /publication
Description         Get all publications
Parameter           NONE
Methods             GET
*/

booky.get("/publication/book/:book",(req,res) =>{
    const getSpecficPublication = database.publication.filter(
        (publication) => publication.books.includes(req.params.book)
    )

    if(getSpecficPublication.length === 0){
        return res.json({error:`No publcation found with book ${req.params.book}`})
    }

    return res.json({publication:getSpecficPublication})
})








booky.listen(3000,() => {
    console.log("initiated")
})

