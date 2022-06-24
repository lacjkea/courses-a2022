//These two are needed if we wish to pass custom arguments
//to the function

function C(props) {
  function myFunc(greeting) {
    //do stuff
  }
  return (
    <button
      onClick={(e) => {
        myFunc("Hi");
      }}
    >
      Click me
    </button>
  );
}
