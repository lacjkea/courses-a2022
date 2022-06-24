const me = {
  name: "Jonas",
  email: "jofh@kea.dk",
  age: 43,
};

//pick out name and email
const { name, email } = me;

//name === "Jonas"
//email === "jofh@kea.dk"

//commonly used with arguments
function sayHi({ name }) {
  //we get the entire object, but pick out name
  console.log(`hi ${name}`);
}

sayHi(me);
