const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input[0]); // 숫자의 개수
const numbers = input[1].split(" ").map(Number); // 확인할 숫자들

function isPrime(num) {
  if (num === 1) return false; // 1은 소수가 아님
  if (num === 2) return true; // 2는 소수

  // 2부터 숫자의 제곱근까지 나누어 떨어지는지 확인
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // 하나라도 나누어 떨어지면 소수가 아님
    }
  }
  return true;
}

let count = 0;
for (let i = 0; i < N; i++) {
  if (isPrime(numbers[i])) {
    count++;
  }
}

console.log(count);
