function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [0, 1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1,0,1,2,3]
const stringArray = insertAtBeginning(["b", "c", "d"], "a");
stringArray[0].split(""); // able to infer that this is of type string
// updatedArray[0].split('')
// the functions and args are type arry so:
// updatedArray[0].split('') will not show an error in the editor even though split cant be run in a number without the angle brackets for generics

console.log(updatedArray);
console.log(stringArray);
