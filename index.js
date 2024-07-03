// index.js

// Function expression called divide
const divide = function() {
    return 2000 / 100;
  };
  
  // Arrow function called square
  const square = (x) => {
    return x * x;
  };
  
  // Arrow function called add
  const add = (a, b) => {
    return a + b;
  };
  
  module.exports = {
    divide,
    square,
    add
  };
  