let message: string = "testing ts out the box - should write to text file";

const encoder = new TextEncoder();
const data = encoder.encode(message);

console.log(message);

Deno.writeFile("message.txt", data).then(() =>
  console.log("wrote to file successfully")
);
