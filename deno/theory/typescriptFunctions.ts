function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result:" + num);
}

printResult(add(10, 100));
console.log(printResult(add(10, 100))); //in JS this is undefined
