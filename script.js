// write your JavaScript here
const getQuote = async() => {
  const res = await fetch('https://type.fit/api/quotes')
  const quotes = await res.json()
  const num = Math.floor(Math.random()*quotes.length)
  const item = quotes[num]
  const quoteText = document.querySelector('#quote-text').innerText = item.text
  const quoteAuthor = document.querySelector('#quote-author').innerText = item.author
}
