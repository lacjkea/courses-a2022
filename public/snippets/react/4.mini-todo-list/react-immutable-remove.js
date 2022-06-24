import { useState } from "react";
export default function StateArray() {
  const [persons, setPersons] = useState([
    { name: "Jonas", id: 1 },
    { name: "Klaus", id: 2 },
    { name: "Peter", id: 3 },
  ]);
  const removePerson = (id) => {
    setPersons((prevState) => prevState.filter((person) => person.id !== id));
  };
  return (
    <section>
      <ul>
        {persons.map((item) => {
          return (
            <li>
              {item.name} a.k.a "{item.id}"
              <button onClick={() => removePerson(item.id)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
