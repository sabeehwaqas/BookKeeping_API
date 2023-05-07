const books = [
    {
        ISBN: "1234",
        title: "Tesla",
        pubDate: "2021-08-05",
        lang: "en",
        numPage: 250,
        author: [1,2],
        publication: [1],
        category: ["tech","space","education"]
    }

]

const author = [
    {
        id:"1",
        name: "sabeeh",
        books: ["1234",'secretBook']

    },
    {
        id:"2",
        name: "Elon Musk",
        books: ["1234"]
    }
]

const publication = [
    {
        id:"1",
        name:"writex",
        books:["1234"]
    }
]

module.exports = {books,author,publication};