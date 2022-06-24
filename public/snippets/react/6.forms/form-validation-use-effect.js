import { useState, useEffect, useRef } from "react";
export default function VanillaForm() {
  const [name, setName] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const form = useRef(null);

  useEffect(() => {
    // prettier-ignore
    const isCreditCardValid = 
      cardnumber.replaceAll(" ", "").length === 16;
    // prettier-ignore
    setIsValid(
      form.current.checkValidity() && isCreditCardValid
    );
  }, [name, cardnumber]);

  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmit} ref={form}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        required
        minLength="2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="cardnumber">Card number</label>
      <input
        value={cardnumber}
        onChange={(e) => setCardnumber(e.target.value)}
        required
      />
      <button disabled={!isValid}>Submit</button>
    </form>
  );
}
