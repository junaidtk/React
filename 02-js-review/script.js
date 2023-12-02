const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

/* 
function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);
book;
// Destructing Obejct:
const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
  book;
console.log(author, title, genres, pages, publicationDate, hasMovieAdaptation);
console.log(publicationDate);

const [primaryGenere, secondaryGenere, ...otherGenere] = genres;

console.log(primaryGenere, secondaryGenere, otherGenere);

// Spread operator
const newGenere = [...genres, "epic fantasy"];
newGenere;
const newGenere2 = ["epic fanatasy", ...genres];
newGenere2;

const updatedBook = {
  ...book,
  // adding a new property
  moviePublicationDate: "2001-12-30",
  // Overiding a new property
  pages: 1210,
};
updatedBook;

// template literal
const summary = `${title} is a ${pages}-page written by ${author} and pubished in ${
  publicationDate.split("-")[0]
}. The book ${hasMovieAdaptation ? "" : "not"} been adapted as Movie`;
summary;

// Ternarry operator:
const pagesRange = pages > 1000 ? "over thousands" : "less than thousands";
pagesRange;

console.log(`The book has ${pagesRange} pages`);

//Arrow funcions:
// old way
// function getYear(str) {
//   return str.split("-")[0];
// }

// New way Arrow function

//const getYear = (str) => str.split("-")[0];

// If you want to write multiple lines then we can use curly barces
// For one liner we don't need curly braces and return statement.

const getYear = (str) => {
  return str.split("-")[0];
};

console.log(getYear(publicationDate));

// template literal
const summary1 = `${title} is a ${pages}-page written by ${author} and pubished in ${getYear(
  publicationDate
)}. 
The book ${hasMovieAdaptation ? "" : "not"} been adapted as Movie`;
summary1;

// short circuting and logical operation &&
// if first value is true, the it will check second value, other wise it will return first value.
console.log(true && "some value ");
console.log(false && "Some value");

console.log(hasMovieAdaptation && "This book has a movie");
// falsy : 0, '', null, undefined

console.log("junu" && "Some value");
console.log(0 && "some value");

// short circuting and logical operation ||
// When the first value is ture, then it will retun the first value other wise second value.
console.log(true || "some string");
console.log(false || "some vaue");

console.log(book.translations.spanish); // Undefined

const spanishTranslation = book.spanishTranslation || "Not Translated";
spanishTranslation; // Not translated

console.log(book.reviews.librarything.reviewsCount);

const countWrong = book.reviews.librarything.reviewsCount || "No data";
countWrong; // No data

// Null collasing operator, it will retrun second value only if the first value is null or undefined.
const count = book.reviews.librarything.reviewsCount ?? "No data";
count;

// Optional chaining
//  ?. we can use for the optional chaning.
// Here we have used optional chaingin and null collacing operator also.
function getTotalReviewCount(book) {
  const librarything = book.reviews?.librarything?.reviews ?? 0;
  librarything;
  const goodreads = book.reviews?.goodreads.reviewsCount;
  goodreads;
  return librarything + goodreads;
}

console.log(getTotalReviewCount(book));

*/
/*
function getTotalReviewCount(book) {
  const librarything = book.reviews?.librarything?.reviews ?? 0;
  librarything;
  const goodreads = book.reviews?.goodreads.reviewsCount;
  goodreads;
  return librarything + goodreads;
}

const books = getBooks();
// Array Map function usage.
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewCount: getTotalReviewCount,
  };
});

essentialData;

// array map without return and multiple lines.
const essentialData1 = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewCount: getTotalReviewCount(book),
}));

essentialData1;

// useage of filter and usage of multiple
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

// Usage of both filter and map function.
// filter function is returing and array, and we can use map on that array.
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

// Use of reduce methods in javascript
// Here in the arrow fucntion we have two argument, it will sum up all values of the iteration,
// The zero means, sum variable is start with zero, we can use any type value as an intital value.
// like array [], object etc..
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// Array sort methods/.
// Here the original array is also goen for the sort, means original array is mutated while sorting.
// If we use a-b, then it will sort by ascending
// If we use b-a, then it will sort by descending.
const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b);
arr;
sorted;

// To avoid mutation we can use slice option, which will return an array,
// then sort will mutate the returned array
const newArr = [3, 7, 1, 9, 6];
const newSorted = newArr.slice().sort((a, b) => a - b);
newArr;
newSorted;

// Add a new book object to array
const newBook = {
  id: 6,
  title: "Harry Potter an the Chanmber of Scretes",
  author: "J. K. Rowling",
};
const bookAfterAdd = [...books, newBook];
bookAfterAdd;

// Delete a Book object from array

const bookAfterDelete = bookAfterAdd.filter((book) => book.id !== 3);
bookAfterDelete;

// Update a Book object in the array

const bookAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1024 } : book
);
bookAfterUpdate;

*/
// Normally Javascript will run one line after, it won't wait for the completion of a statement to
// execute next statement. But we can do it by using the then. so the code inside then will execute after
// getting the response of previous.
// here console.log('junaid'); will execute first then it will execute the api result.
// This is the form of asynchronous javascript. That is, it will wait for the result.
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Junaid");

// Async and await. It is similar to above method. But it is more aligned to normal function.
// Here async and await will wait for the result from the code.
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();
// here the javascript will continue to execute next statement, but the variable todo is not completed.
// So it will show like Promise {<pending>}.
// But in the async and await fucntion, the javascript will wait for the result.
console.log(todos);
console.log("Haii junu");
