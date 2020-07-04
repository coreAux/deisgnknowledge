const quoteTag = document.querySelector("h1");
const authorTag = document.querySelector("p");
const randomTag = document.querySelector("footer img");

let data = [];

const getQuote = () => {
  if (data.length > 0) {
    // Get a random quote
    const randomNumber = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomNumber];

    // Put it in the site
    quoteTag.innerHTML = randomQuote.quote;
    authorTag.innerHTML = randomQuote.author;
  }
};

//run getQuote on page load
getQuote();

// run getQuote on click of random image
randomTag.addEventListener("click", () => {
  getQuote();
});
