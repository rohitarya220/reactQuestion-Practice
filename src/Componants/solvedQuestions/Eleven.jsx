import React from 'react'

const Eleven = () => {
  const quotes = [
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy"
  ];
  
 

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex]


  
  


  return (
    <div>
      <h1>{randomQuote} </h1>
    </div>
  )
}

export default Eleven