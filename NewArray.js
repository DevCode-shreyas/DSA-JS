// Array Deceleration

// var arr = new Array();

let person = {
  name: "John",
  age: 30,
};

let arr = ["apple", "banana", "mango", person];

// console.log(arr[5].age);
// console.log(arr.length);

//TODO: Add and Remove Elements from Array

// arr.push("kiwi");
// console.log(arr);

// arr.pop(); // remove last element
// console.log(arr);

// add to Top of Array
// arr.unshift("kiwi"); // add to top of array
// console.log(arr);

// arr.shift(); // remove from top of array
// console.log(arr);

// TODO: Looping through Array  ---- Inbuilt Methods

for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
  //   console.log(arr[i]);
  i++;
}

const numbers = [1, 2, 3, 4, 5];

const newNums1 = numbers.map((item, index, array) => {
  return item + 2;
});

// console.log(newNums1);

const newNums2 = numbers.filter((item) => {
  return item > 3;
});

// console.log(newNums2);

const newNums3 = numbers.reduce((prev, item) => {
  return prev + item;
}, 0);

// console.log(newNums3);

const newNums4 = numbers.some((item) => {
  return item > 3;
}); // return true if any item is greater than 3

// console.log(newNums4);

const newNums5 = numbers.every((item) => {
  //   return item > 3;
  return item < 10;
});

// console.log(newNums5);

const newNums6 = numbers.find((item) => {
  //   return item > 3;
  return item > 10;
}); // return first item which is greater than 3

// console.log(newNums6);

// TODO: Spread & Rest Operator

const nums = [1, 2, 3];
const Nums2 = [4, 5, 6];

// const newNums = [...nums, ...Nums2]; // spread operator

// console.log(newNums);

function sum(...numbers) {
  // rest operator
  return numbers;
}

// console.log(sum(nums, Nums2, 5, "hello"));

// TODO:  more Array Methods

//concat
const newArr = nums.concat(Nums2, arr);

// console.log(newArr);

//Slice
const newArr1 = arr.slice(0, 2); // start index, end index

// console.log(newArr1);

//splice
arr.splice(1, 2, "orange"); // start index, no of elements to remove

// console.log(arr);

//Fill
// nums.fill(2, 2); // fill all elements with 0
// console.log(nums);

//findIndex
const index = nums.findIndex((item) => {
  return item === 2;
});
// console.log(index);

// flat

const arr1 = [1, 2, [3, 4, [5, 6]]]; // nested array [1,2,3,4,5,6]

const flatArr = arr1.flat(2);

// console.log(flatArr);

// reverse
nums.reverse();
// console.log(nums);

// sort
const unsorted = [3, 5, 7, 6, 1, 8, 9];
unsorted.sort((a, b) => {
  //   return a - b;   // assending order
  return b - a; // descending order
});

// console.log(unsorted);

// ---------------- Questions -----------------

//TODO:  Q-1 : second Largest Number in Array

// [12, 25, 1, 10, 24, 1];

function secondlargest(arr) {
  const uniqueArr = Array.from(new Set(arr));

  uniqueArr.sort((a, b) => {
    return b - a;
  });

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }

  //   console.log(uniqueArr);
}
// console.log(secondlargest([12, 25, 1, 10, 24, 1]));
// console.log(secondlargest([10, 5, 10]));

const secondlargestOptimized = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

// console.log(secondlargestOptimized([12, 35, 1, 10, 34, 1]));
// console.log(secondlargestOptimized([10, 5, 10]));

// TODO: Q-2: Rotate Array by k

function rotateArray(nums, k) {
  let size = nums.length;

  if (size > k) {
    k = k % size;
  }

  const rotated = nums.splice(size - k, size);
  nums.unshift(...rotated);

  return nums;
}

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

function rotateArrayOptimised(nums, k) {
  let size = nums.length;

  if (size > k) {
    k = k % size;
  }
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
}

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

// console.log(rotateArrayOptimised([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotateArrayOptimised([-1, -100, 3, 99], 2));

// TODO: Q-3: Remove Duplicates from Sorted Array
//[0,0,1,1,1,2,2,3,3,4]

function removeDuplicates(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
}

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// without JS Methods
function removeDuplicatesOptimised(nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicatesOptimised([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
