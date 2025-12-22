const fs = require("fs");
const version = process.argv[2];
const filePath = "./version.json"; // The file you want to edit

const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
data.version = version;

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log(`Updated ${filePath} to version ${version}`);
