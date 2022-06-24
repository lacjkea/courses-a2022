import { useState } from "react";
export default function StateArray() {
  const [persons, setPersons] = useState([
    { name: "Jonas", id: 1 },
    { name: "Klaus", id: 2 },
    { name: "Peter", id: 3 },
  ]);
  const addPerson = () => {
    setPersons((prevState) =>
      prevState.concat({
        name: "Dannie",
        id: 4,
      })
    );
  };
  return (
    <section>
      <button onClick={addPerson}>Add Person</button>
      <ul>
        {persons.map((item) => {
          return (
            <li>
              {item.name} a.k.a "{item.id}"
            </li>
          );
        })}
      </ul>
    </section>
  );
}
