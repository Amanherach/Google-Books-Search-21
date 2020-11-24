const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/google-books"
);

// const bookSeed = [
//   {
//     title: "The Dead Zone",
//     authors: "Stephen King",
//     description:
//       "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
//     image: "http://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//     link: "http://books.google.com/books?id=ZbUACwAAQBAJ&pg=PP1&dq=the+dead+zone&hl=&cd=1&source=gbs_api"
//   },
//   {
//     title: "Lord of the Flies",
//     authors: "William Golding",
//     description:
//       "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
//     image: "http://books.google.com/books/content?id=r6eoCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//     link: "http://books.google.com/books?id=r6eoCwAAQBAJ&pg=PP1&dq=Lord+of+the+flies&hl=&cd=1&source=gbs_api"
//   }
  
// ];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });