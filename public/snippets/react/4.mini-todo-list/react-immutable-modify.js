import { useState } from "react";
export default function StateArray() {
  const [persons, setPersons] = useState([
    { name: "Jonas", id: 1 },
    { name: "Klaus", id: 2 },
    { name: "Peter", id: 3 },
  ]);
  const modifyPerson = (id, newName) => {
    setPersons((prevState) =>
      prevState.map((person) => {
        if (person.id === id) {
          const newPerson = { ...person };
          newPerson.name = newName;
          return newPerson;
        }
        return person;
      })
    );
  };
  return (
    <section>
      <ul>
        {persons.map((item) => {
          return (
            <li>
              {item.name} a.k.a "{item.id}"
              <button onClick={() => modifyPerson(item.id, "Dannie")}>
                Modify
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
