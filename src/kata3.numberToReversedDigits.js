const numberToReversedDigits = number => {
  return number
    .toString() // converts the number to a string
    .split("") // splits the string to an array
    .reverse() // reverses the array
    .map(Number); // applies a function to each element in the array the function converts a string to an object
};

module.exports = numberToReversedDigits;
