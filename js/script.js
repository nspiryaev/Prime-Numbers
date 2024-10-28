function isPrimeNumber(num) {
  if (num <= 1) return false;
  if ([2, 3, 5, 7].includes(num)) return true;
  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0)
    return false;

  for (let i = 11; i * i <= num; i += 6) {
    console.log(i);
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

console.log(isPrimeNumber(7349));
