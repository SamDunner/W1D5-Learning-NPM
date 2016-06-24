var chalk = require("chalk");

var message = chalk.green("Hello ") + chalk.red("World");
console.log(message);

var insaneTests = chalk.bgBlack.green.underline.bold("Playing", "around with colours");
console.log(insaneTests);