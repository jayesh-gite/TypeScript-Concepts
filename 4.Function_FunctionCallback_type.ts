function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result :" + num);
}

printResult(add(5, 12));

//let combineValues: Function;
// combineValues=add;

let combineValues: (a: number, b: number) => number; //function type

combineValues = add;
console.log(combineValues(8, 8));

// Function call back example

function addHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addHandle(10, 20, (n: number) => {
  //Callback inline funtcion
  console.log("result from callback is:" + n);
});
