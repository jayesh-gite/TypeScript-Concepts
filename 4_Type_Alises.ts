type Combinable = number | string;
type conversiodesc = "as-number" | "as-string";
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: conversiodesc
) {
  let result;
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConversion == "as-number"
  ) {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
let combineAges = combine(10, 20, "as-number");
console.log(combineAges);
let combineNames = combine("Jay", "yash", "as-string");
console.log(combineNames);
