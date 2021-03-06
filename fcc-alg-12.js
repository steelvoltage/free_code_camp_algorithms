// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumFibs(num) {
  let a = 1;
  let b = 0;
  let temp;
  let sum = 0;

  for (let i = num; i >= 0; i--) {
    if (b <= num) {
      if (b % 2 === 1) {
        sum += b;
      }
      let temp = a;
      a += b;
      b = temp;
    }
  }
  return sum;
}

// sumFibs(10);
sumFibs(1000);
