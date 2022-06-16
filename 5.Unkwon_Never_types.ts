let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "Jayesh";
if (typeof userInput === "string") {
  userInput = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, erroCode: code };
}
const result = generateError("An error occured", 405);
console.log(result);
