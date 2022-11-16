// function getSumPairZero(array) {
//   for (let number of array) {
//     // console.log(number);
//     for (let j = 1; j < array.length; j++) {
//       if (number + array[j] === 0) {
//         return [number, array[j]];
//       }
//     }
//   }
// }

// const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);

// 0(n^2) quadratic time complexity

// code for better time complexity - linear

function getSumPairZero(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

// o(n) linear complexity

// take left  0 index  value
//take right  0 index value
//add both numbers if greater then 0 then shift right index  amd continue loop
//if less then 0 then shift left index value and same
// If equal to 0  then return value [?, ?]
