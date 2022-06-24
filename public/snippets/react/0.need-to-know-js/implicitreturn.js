//implicit return
const double = amount => amount * 2;
const number = double(4);

//explicit return
const double = amount => {
  return amount * 2;
};

const number = double(4);
