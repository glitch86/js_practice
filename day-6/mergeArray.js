const mergeArrays = (...arrays) => {
  const newArray = [];
  arrays.map((array) => newArray.push(...array));
  return newArray;
};

console.log(mergeArrays([1, 2], [3, 4], [5]));
