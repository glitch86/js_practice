const user = {
  firstName: "Sara",
  lastName: "Khan",
  age: 25,
};

const { firstName: name, lastName, age } = user;

console.log("Name: ", name, ", Last Name: ", lastName, ", Age: ", age);
