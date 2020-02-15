const fs = require("fs");

fs.readFile(__dirname + "/text.txt", "utf8", (err, data) => {
  console.log(data);
});
