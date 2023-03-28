function compareArrays(arr1, arr2) {
  return arr1.every((el, i) => el === arr2[i] && arr1.length === arr2.length);
}

module.exports = {
  compareArrays,
};

function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0) return 0;
  const genderArray = users.filter((user) => user.gender === gender);
  if (genderArray.length === 0) return 0;
  const res = genderArray.reduce((acc, user) => {
    return acc + user.age;
  }, 0);
  return res / genderArray.length;
}

module.exports = {
  getUsersNamesInAgeRange,
};
