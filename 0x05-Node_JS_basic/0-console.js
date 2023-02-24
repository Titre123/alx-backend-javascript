/*
  Function takes in an argument and print it to stdout
*/
function displayMessage(args) {
    process.stdout.write(args);
}

module.exports = displayMessage;