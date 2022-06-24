class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(this.name + " says hi");
  }
}

const po = new User("Po", 35);
po.sayHi();
