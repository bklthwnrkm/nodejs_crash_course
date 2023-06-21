class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`私の名前は${this.name}です。${this.age}歳です。`);
  }
}

// const person = {
//   name: "aiueo",
//   age: 30,
// };

// module.exports = person;
module.exports = Person;
// person: person,
