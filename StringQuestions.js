// Strings

// const str = "Hello World"; // String literal
// const str2 = "Hello World"; // String literal
// const str3 = `Hello World`; // String literal

// const str4 = ` Hello ${str}`; // template literal
// console.log(str4); // Hello Hello World

// function test(string, ytChannel, person) {
//   console.log(string, ytChannel, person);
//   return;
// }

// test`Hello ${"World"} this is ${"youtube"} and I am ${"Rahul"}`;

// string length
// const str = "Hello World";
// console.log(str);
// console.log(str.length); // 11

// console.log(str[3]); // l
// console.log(str.charAt(6)); // W

//looping over string

// for (let i = 0; i < str.length; i++) {
//   //   console.log(str[i]);
// }

//modify string

// str[0] = "h"; // not allowed
// console.log(str); // Hello World  // strings are immutable in js so we can't modify them

// console.log(str.replace("Hello", "Hi")); // Hi World // replace method returns a new string

// console.log(str.replaceAll("H", "c")); // cello World

// const str2 = str.concat(" ", "shreyas"); // Hello World shreyas
// console.log(str2); // Hello World shreyas

// console.log(str.indexOf("l")); // 2
// console.log(str.lastIndexOf("l")); // 9
// console.log(str.startsWith("H")); // true
// console.log(str.startsWith("h")); // false
// console.log(str.endsWith("d")); // true
// console.log(str.endsWith("D")); // false

// extract string

// console.log(str.substring(0, 8)); // Hello Wo
// console.log(str.slice(0, 8)); // Hello Wo

// convert string to lowercase and uppercase

// console.log(str.toLowerCase()); // hello world
// console.log(str.toUpperCase()); // HELLO WORLD

// const a = { name: "Rahul" };
// console.log(String(a)); // [object Object]
// console.log(JSON.stringify(a)); // {"name":"Rahul"}

// ASCII value of character

// console.log(str.charCodeAt(0)); // 72
// console.log(String.fromCharCode(72)); // H

// strng comparison

// const str1 = "apple";
// const str2 = "banana";

// console.log(str1.localeCompare(str2)); // -1

// console.log(str.includes("Hello")); // true

// splitting & joining strings

// console.log(str.split(" ")); // ["Hello", "World"]

// const arr = ["Hello", "World"];
// console.log(arr.join(" and ")); // Hello World

// TODO: question 1: Truncate the string

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 1) + "...";
//   } else {
//     return str;
//   }
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20)); // "What I'd like to te…"

// TODO: question 2: Palindrome Number

// function isPalindrome(str) {
//   //   let rev = str.split("").reverse().join("");
//   //   return rev === str;
//   //   2nd method optimized
//   //   return str < 0 ? false : str === +str.toString().split("").reverse().join("");
// }

// console.log(isPalindrome(121)); // true

// TODO: question 3: hamming distance

// function hammingDistance(x, y) {
//   if (x.length !== y.length) {
//     throw new Error("Strings must be of the same length");
//   }
//   let count = 0;
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] !== y[i]) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(hammingDistance("hello", "hwllr")); // 2

// optimized solution

// function hammingDistance(x, y) {
//   x = x.toString(2);
//   y = y.toString(2);

//   if (x.length < y.length) {
//     while (x.length !== y.length) x = "0" + x;
//   } else {
//     while (x.length !== y.length) y = "0" + y;
//   }

//   let count = 0;
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] !== y[i]) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(hammingDistance(1, 4)); // 2

// TODO: question 4: valid anagram

// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;
//   let s1 = s.split("").sort().join("");
//   let t1 = t.split("").sort().join("");
//   return s1 === t1;
// }

// console.log(isAnagram("anagram", "nagaram")); // true
