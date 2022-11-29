function getChar(str) {
  const map = {};
  str.split("").forEach((element) => {
    map[element] = map[element] ? map[element] + 1 : 1;
  });

  let max = 1;
  char = str[0];
  for (const k in map) {
    if (map[k] > max) {
      max = map[k];
      char = k;
    }
  }
  return char;
}

const res = getChar("Hello World");
console.log(res);
