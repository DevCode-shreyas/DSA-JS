function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    let iswapped;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        iswapped = true;
      }
    }
    if (!iswapped) {
      break;
    }
  }
  return array;
}

const res = bubbleSort([5, 3, 4, 1, 2, 8, 6, 7]);
console.log(res);

// time complexity is O(n*2)
