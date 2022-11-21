// checking Square in another array

// function isSquareCheck(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     let isSquare = false;
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] * array1[i] === array2[j]) {
//         isSquare = true;
//       }
//       if (j === array2.length - 1) {
//         if (!isSquare) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }

// const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
// console.log(result);

// time complexity O(n*2)

// optimized code

function checkSquare(array1, array2) {
  let map1 = {};
  let map2 = {};

  for (item1 of array1) {
    map1[item1] = (map1[item1] || 0) + 1;
  }
  console.log("Map1", map1);
  for (item2 of array2) {
    map2[item2] = (map2[item2] || 0) + 1;
  }
  console.log("Map2", map2);

  for (let key in map1) {
    console.log("key", key);
    // obj key
    if (!map2[key * key]) {
      return false;
    }
    // vlaue compare
    if (map1[key] !== map2[key * key]) {
      return false;
    }
  }
  return true;
}

const result = checkSquare([1, 2, 4, 2], [1, 4, 4, 16]);
console.log(result);

// time complexity O(n) linear
