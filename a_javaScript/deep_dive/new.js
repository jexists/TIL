class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  } 
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// this.age = age < 0 ? 0 : age;