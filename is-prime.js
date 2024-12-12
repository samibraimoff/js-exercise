const isPrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log("is 1 a prime?", isPrime(1));
console.log("is 5 a prime?", isPrime(5));
console.log("is 4 a prime?", isPrime(4));
console.log("is 7 a prime?", isPrime(7));
