function addOrConcat(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
): number | string {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input2 + +input1;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(addOrConcat(6, 4, "as-number"));
console.log(addOrConcat(2, 0, "as-text"));
console.log(addOrConcat("thulan", 1, "as-text"));
console.log(addOrConcat("cat", "egory", "as-text"));
