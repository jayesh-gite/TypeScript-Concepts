// const person = {
//   name: "Jayesh", // by defualt inference string
//   age: 28, // by default inference number
// };

enum UserRole {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[]; //Array
  role: [number, string]; //Tuple
  userrole?: UserRole;
  anything: any;
} = {
  name: "Jayesh",
  age: 28,
  hobbies: ["sports", "cooking"],
  role: [1, "Author"],
  userrole: UserRole.AUTHOR,
  anything: "Jayesh",
};

person.anything = 14;
console.log(person.userrole);
//console.log(person.nickname);
