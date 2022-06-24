let persons = [
  { name: "Jonas", id: 1 },
  { name: "Klaus", id: 2 },
  { name: "Peter", id: 3 },
];
function remove(id) {
  return persons.filter((person) => person.id !== id);
}
