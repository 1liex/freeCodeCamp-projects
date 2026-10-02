/**
 * isPrime function
 * @description that takes a number as an argument and returns true if it is prime, or false otherwise.
 * @param {Number} num
 * @returns {boolean} true if it is prime, or false otherwise.
 */
function isPrime(num) {
  if (typeof num !== "number") return "num should be valied number";

  if (num <= 1) return false;

  if (num === 2) return true;

  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isPrime,
};
