const fs = require("fs").promises;

const text = "testing js - should write to text file";

fs.writeFile("node-message.txt", text).then(() => console.log("Wrote to file"));
