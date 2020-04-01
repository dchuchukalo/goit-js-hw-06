import users from './users.js';

// // Task 01
// const getUserNames = users => {
//   return users.map(({ name }) => name);
// };

// // const getUserNames = users => {
// //   return users.map(function(user) {
// //     return user.name;
// //   });
// // };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// // Task 02
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({ eyeColor }) => eyeColor === color);
// };

// // const getUsersWithEyeColor = (users, color) => {
// //   return users.filter(function(user) {
// //     return user.eyeColor === color;
// //   });
// // };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// // Task 03
// const getUsersWithGender = function(users, personGender) {
//   return users
//     .filter(({ gender }) => gender === personGender)
//     .map(({ name }) => name);
// };

// // const getUsersWithGender = function(users, gender) {
// //   const filteredUsers = users.filter(function(user) {
// //     return user.gender === gender;
// //   });
// //   return filteredUsers.map(function(user) {
// //     return user.name;
// //   });
// // };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// // Task 04
// const getInactiveUsers = users => {
//   return users.filter(({ isActive }) => !isActive);
// };

// // const getInactiveUsers = users => {
// //   return users.filter(function(user) {
// //     return !user.isActive;
// //   });
// // };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// // Task 05
// const getUserWithEmail = (users, personEmail) => {
//   return users.find(({ email }) => email === personEmail);
// };

// // const getUserWithEmail = (users, email) => {
// //   return users.find(function(user) {
// //    return user.email === email;
// //   });
// // };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// // Task 06
// const getUsersWithAge = (users, min, max) => {
//   return users.filter(({ age }) => age > min && age < max);
// };

// // const getUsersWithAge = (users, min, max) => {
// //   return users.filter(function(user) {
// //     return user.age > min && user.age < max;
// //   });
// // };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// // Task 07
// const calculateTotalBalance = users => {
//   return users.reduce((total, { balance }) => total + balance, 0);
// };

// // const calculateTotalBalance = users => {
// //   return users.reduce(function(total, user) {
// //     return total + user.balance;
// //   }, 0);
// // };

// console.log(calculateTotalBalance(users)); // 20916

// // Task 08
// // Для меня это задание оказалось очень тяжелым. Над этим решением я провёл порядка 3 часов.
// // И потом еще час рефакторил что бы понять принцип работы и сделать максимально адекватное и понятное решение.
// // Я вообще упустил из виду .some. Пытался как то вытащить значения из массива friends.
// // Уже думал делать перебор масива user.friends и сравнивать значения типа friends[0] === friendName и писать кучу if-ов.
// // const getUsersWithFriend = (users, friendName) => {
// //   return users.filter(user =>
// //     user.friends.some(friend => friend === friendName),
// //   );
// // };

// // const getUsersWithFriend = (users, friendName) => {
// //   const trueFriend = friend => friend === friendName;
// //   return users
// //     .filter(user => user.friends.some(trueFriend))
// //     .map(user => user.name);
// // };

// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(({ friends }) => friends.includes(friendName))
//     .map(({ name }) => name);
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// // Task 09
// const getNamesSortedByFriendsCount = users => {
//   const sortByQuantityOfFriends = (a, b) => a.friends.length - b.friends.length;
//   return users.sort(sortByQuantityOfFriends).map(({ name }) => name);
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// // Task 10
// // Это задание тоже оказалось тяжелым. Признаюсь честно, очень долго пытался понять,
// // как сделать что бы значения не повторялись. Но так и не смог ничего реализовать.
// // В голове уже какая то каша из всевозможных инструментов. Решение по фильтрации нашел в интернете.
// // До этого думал сделать либо через фильтр(но не знал какое условие сделать),
// // либо через some(если такой элемет был то пропускать, а если нет, то записывать).
// // Возможно подскажите, какое решение здесь ожидалось?
// const getSortedUniqueSkills = users => {
//   const getTags = users =>
//     users.reduce((allTags, user) => {
//       allTags.push(...user.skills);
//       return allTags;
//     }, []);
//   const allTags = getTags(users);
//   return allTags.filter((tag, index) => {
//     return index === allTags.indexOf(tag);
//   }).sort();
// };

const getSortedUniqueSkills = users => {
  return users
    .reduce((allTags, user) => {
      allTags.push(...user.skills);
      return allTags;
    }, [])
    .filter((tag, index, allTags) => allTags.indexOf(tag) === index)
    .sort();
};

// const getSortedUniqueSkills = users => {
//   const getSkills = users =>
//     users.reduce((allTags, user) => {
//       allTags.push(...user.skills);
//       return allTags;
//     }, []);
//   const skills = getSkills(users);
//   const uniqueSkills = skills =>
//     skills.reduce((acc, skill) => {
//       if (acc.includes(skill)) {
//         return acc;
//       }
//       acc.push(skill);
//       return acc;
//     }, []);
//   return uniqueSkills(skills).sort();
// };
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Я прописывал решения через обычные функции, по тому что со стрелочными путался.
// Вроде бы написал через стрелочные и всё работает, но не понимаю что и куда идет.
// По этому потом переписывал и сравнивал.
