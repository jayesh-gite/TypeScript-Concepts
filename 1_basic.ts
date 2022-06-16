function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + " " + result);
  } else {
    return n1 + n2;
  }
}
const num1 = 5; // type inference explecitly
const num2 = 2.8; //
const PrintResult = true; //
const phrase: string = "Result is"; // added type implecitly

add(num1, num2, PrintResult, phrase);
