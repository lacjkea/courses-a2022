const users = [
  {
    name: "Jonas",
    age: 43,
  },
  {
    name: "Birk",
    age: 10,
  },
];

users.forEach(function (person) {
  console.log(person.name);
});

//can be written as
users.forEach((person) => {
  console.log(person.name);
});
