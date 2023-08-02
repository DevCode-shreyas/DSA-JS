//  question 1 - sum of all natural numbers from 1 to n

// function sumOfAllNaturalNumbers(num) {
//   // return (n * (n + 1)) / 2;
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// console.log(sumOfAllNaturalNumbers(5));

// question 2 - Sum of digits of a number

// function sumOfDigits(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//     return sum;
// }

// console.log(sumOfDigits(1287));

// question 3 - count the number of digits of a number

// function countDigits(num){
//     num = Math.abs(num);
//     let count = 0;
//     do {
//         count++;
//         num = Math.floor(num / 10);
//     } while (num > 0);
//     return count;
// }

// console.log(countDigits(12111));

// question 4 - palindrome number

// var isPalindrome = function (x) {
//   let copyNum = x;
//   let reverseNum = 0;

//   while (copyNum > 0) {
//     const lastDigit = copyNum % 10;
//     reverseNum = reverseNum * 10 + lastDigit;
//     copyNum = Math.floor(copyNum / 10);
//   }
//   return reverseNum === x;
// };

// console.log(isPalindrome(121));

// question 5 - fibonacci number

// var fib = function (n) {
//   if (n < 2) {
//     return n;
//   }

//   let prev = 0;
//   let curr = 1;
//   next = 0;
//   for (let i = 2; i <= n; i++) {
//     next = prev + curr;
//     prev = curr;
//     curr = next;
//   }
//     return next;
// };

// console.log(fib(4));

// question 6 - missing number

// var missingNumber = function (nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return (nums.length * (nums.length + 1)) / 2 - sum;
// };

// console.log(missingNumber([3, 0, 1]));
