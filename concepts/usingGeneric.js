var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function insertAtBeginning(array, value) {
    var newArray = __spreadArrays([value], array);
    return newArray;
}
var demoArray = [0, 1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); //[-1,0,1,2,3]
var stringArray = insertAtBeginning([, "b", "c", "d"], "a");
stringArray[0].split(""); // able to infer that this is of type string
// updatedArray[0].split('')
// the functions and args are type arry so:
// updatedArray[0].split('') will not show an error in the editor even though split cant be run in a number without the angle brackets for generics
console.log(updatedArray);
console.log(stringArray);
