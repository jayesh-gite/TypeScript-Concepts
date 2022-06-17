// Code goes here!
//65 - t0 82 re write code again in new file for each concept manner

interface Named {
  name: string;
  demo?: string; //optional property
}
interface Greetable extends Named {
  readonly country: string;
  greet(prahse: string): void;
}

class Person implements Greetable {
  name: string;
  age: number; //can add extra things
  country: string = "india";
  constructor(name: string) {
    this.name = name;

    this.age = 29;
  }
  greet(prahse: string): void {
    console.log("from class " + prahse + " " + this.name);
  }
}

const user11 = new Person("jayesh");
user11.greet("good morning");

let user1: Greetable;
user1 = {
  name: "Jayesh",
  country: "India",
  // age: 40, //not part of interface so will show issue
  greet(prahse: string) {
    console.log(prahse + " " + this.name);
  },
};
user1.greet("good morning");
