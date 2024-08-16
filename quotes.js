// quotes.js

const quotes = [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Get your facts first, then you can distort them as you please.", author: "Mark Twain" },
    { quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { quote: "It is never too late to be what you might have been.", author:"George Eliot"},
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
];

const quoteDiv = document.getElementById('quote');
const authorDiv = document.getElementById('author');
const generateQuoteButton = document.getElementById('generateQuoteButton');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    quoteDiv.textContent = `"${randomQuote.quote}"`;
    authorDiv.textContent = `--- ${randomQuote.author}---`;
}

generateQuoteButton.addEventListener('click', displayRandomQuote);

// Display a quote when the page loads
displayRandomQuote();

