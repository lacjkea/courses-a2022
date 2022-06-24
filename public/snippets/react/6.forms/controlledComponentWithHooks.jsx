import { useState } from "react";

export default function MyForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameChanged = (e) => {
    setName(e.target.value);
  };
  const emailChanged = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    postStuff({
      name: name,
      email: email,
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        {/* prettier-ignore */}
        <input 
          type="text" 
          onChange={nameChanged} 
          name="name" 
          value={name} 
        />
      </label>
      <label>
        E-mail
        <input
          type="email"
          onChange={emailChanged}
          name="email"
          value={email}
        />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
}
