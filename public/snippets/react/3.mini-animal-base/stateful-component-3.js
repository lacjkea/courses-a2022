useState(function (prevState) {
  return prevState + 1;
});

//or more commonly
useState((prevState) => prevState + 1);
