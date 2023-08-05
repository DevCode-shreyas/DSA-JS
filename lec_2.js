// const users = [
//   {
//     id: 1,
//     name: "John",
//     isActive: true,
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "Smith",
//     isActive: true,
//     age: 30,
//   },
//   {
//     id: 3,
//     name: "Doe",
//     isActive: true,
//     age: 40,
//   },
//   {
//     id: 4,
//     name: "Doew",
//     isActive: false,
//     age: 50,
//   },
// ];

//TODO:   1. cheack if User with such name exists

// level 0

// const isNameExist= (name,users) => {
//     let exist = false;
//     for(let i = 0; i < users.length; i++) {
//         if(users[i].name === name){
//             exist = true;
//             // break;
//         }
//     }
//     return exist;
// }

// isNameExist("Doe",users);

// level 1

// const isNameExist = (name, users) => {
//   const user = users.find((user) => user.name === name);
//   return Boolean(user);
// };

// level 2

// const isNameExist = (name, users) => {
//   const index = users.findIndex((user) => user.name === name);
//   return index > 0;
// };

// level 3

// const isNameExist = (name, users) => {
//   const user = users.some((user) => user.name === name);
//   return user;
// };

//TODO:  2. Adding element to array

// const arr=[1,2];
// const append = (arr,element) => {
//     arr.push(element);
//     return arr;
// };

// console.log(append(arr,3));

// const arr=[1,2];
// const append = (arr,element) => {
//    return [...arr,element]
// };

// console.log(append(arr,3));
// console.log(arr);

//TODO: 3. Removing Duplicates element from array

// level 0
// const arr = [1, 2, 3, 3, 4, 4, 5];
//function uniqueArray() {
//   const newArr = [];

//   arr.forEach((e) => {
//     if (!newArr.includes(e)) {
//       newArr.push(e);
//     }
//   });
//   return newArr;
// }

// console.log(uniqueArray(arr));

// level 1 - Set
// const arr = [1, 2, 3, 3, 4, 4, 5];
// function uniqueArray(arr) {
//   return [...new Set(arr)];
// }

// console.log(uniqueArray(arr));

// level 2 - reduce
// const arr = [1, 2, 3, 3, 4, 4, 5];
// function uniqueArray(arr) {
//   return arr.reduce((acc, el) => {
//     return acc.includes(el) ? acc : [...acc, el];
//   }, []);
// }
// console.log(uniqueArray(arr));

//TODO: 4. Conactenating Arrays

// level 0

const mergeArray = (arr1, arr2) => {
  // return [...arr1, ...arr2];
  return arr1.concat(...arr2);
};

const arr1 = [1];
const arr2 = [2, 3];
console.log(mergeArray(arr1, arr2));
console.log(arr1, arr2);
