var new_quote = document.getElementById("new_quote");
var quote = document.getElementById('quote');
var author = document.getElementById('author');
// var instagram = document.getElementById('insta');
var quotes = [];
var random = 0;

new_quote.addEventListener('click', bindQuotes);

async function getQuotes() {
    const quote_res = await fetch("./inspirational_quotes.json")
    quotes = await quote_res.json();
    bindQuotes();
    
}

function bindQuotes(){
    random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].text;
    author.innerHTML = quotes[random].author;
}

// instagram.addEventListener('click', function(){
//     window.open("https://www.instagram.com", "_blank");
// });


getQuotes();