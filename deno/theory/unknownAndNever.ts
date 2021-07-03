// unknown types lets us store any type  but will guard agains types that dont make sense.
// abit more restrictive than type any
let userInput: unknown;
let username: string;

userInput = 5; //this si fine cos we fnt know what input the user will input
userInput = "Mpillz"; /// also fine cose we didnt know if we were gonna get a strng ot a number
// username = userInput // errors cant assign unknown to string eg cant assign bollean to string unknown is not guaranteed to be a string. switch this to any and no error
// so we add a check below ina way its like what we do in swift
if (typeof userInput === "string") {
  username = userInput;
}
// consider addding this to my backend
// return type never means it never provduces a return value when you log there will be nothing logged not even undefined or null, beucase it crashes the script and never reurns the script
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

function infinieLoopNeverREturnsanything(): never {
  while (true) {}
}

generateError("An Error occured", 500);
