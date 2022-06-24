import { useRef } from "react";

export default function Form() {
  const form = useRef(null);

  function onSubmit(e) {
    if (form.current.checkValidity()) {
      //...
    }
  }
  return (
    <form onSubmit={onSubmit} ref={form}>
      <input type="submit" />
    </form>
  );
}
