const users = [
  { username: "shreyas", email: "shreyasbole4@gmail.com" },
  { username: "abc", email: "abc@gmail.com" },
  { username: "xyz", email: "xyz@gmail.com" },
];

function isUserExit(array, val) {
  for (let item of array) {
    if (item["username"] === val) {
      return true;
    }
  }
  return false;
}

const res = isUserExit(users, "abc");
console.log(res);

// time complexity -> linear o(n)
