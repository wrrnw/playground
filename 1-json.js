var fs = require('fs');


const dataBuffer = fs.readFileSync('1-json.json');
const user = JSON.parse(dataBuffer);
user.name = "ren";
user.age = 24;
fs.writeFileSync('1-json.json', JSON.stringify(user));



