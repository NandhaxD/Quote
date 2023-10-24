const quoteButton = document.querySelector('#change-quote');
const quoteText = document.querySelector('#quote');

// Get all quotes from the quote.json file
const quotes = [];
const request = new XMLHttpRequest();
request.open('GET', 'quote.json');
request.onload = function() {
  if (request.status === 200) {
    quotes = JSON.parse(request.responseText);
  }
};
request.send();

// Display a random quote from the quotes array
function displayQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex].quote;
}

// Display a new quote when the change button is clicked
quoteButton.addEventListener('click', displayQuote);

// Display a random quote when the page loads
displayQuote();
