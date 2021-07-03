function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result:" + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(10, 100));
console.log(printResult(add(10, 100))); //in JS this is undefined

let combinedValues: (num1: number, num2: number) => number;

combinedValues = add;

console.log(combinedValues(70500, 85000));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
