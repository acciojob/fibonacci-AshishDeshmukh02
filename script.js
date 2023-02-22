function fibonacci(num) {
  // base cases
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  // recursive case
  else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}


module.exports = fibonacci;
