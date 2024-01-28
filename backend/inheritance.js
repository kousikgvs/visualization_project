// Inheritance.js

class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  
    speak1() {
      console.log(`${this.name} makes another sound`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age);
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} barks`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color) {
      super(name, age);
      this.color = color;
    }
  
    meow() {
      console.log(`${this.name} meows`);
    }
  }
  
  module.exports = {
    Animal,
    Dog,
    Cat,
  };
  