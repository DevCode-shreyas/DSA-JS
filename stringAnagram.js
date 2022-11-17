function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let counter = {};
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }
  //   console.log(counter);
  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}
const result = isAnagram("hello", "llheo");
console.log(result);

// another approch

// function checkString(s1, s2) {
//   return s1.split("").sort().join("") === s2.split("").sort().join("");
// }
// const result = checkString("hello", "llheo");
// console.log(result);
