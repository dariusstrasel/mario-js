/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function createLine(counter, maxLength) {
    whiteSpace = maxLength - counter;
    line = "";
    while (line.length <= whiteSpace){
        line += " "
    }
    for (var lineLength = 1; lineLength <= counter; lineLength++)
        line += "#";
    return line
}

function printPyramid(height) {
    for (var row = 2; row <= height + 1; row++)
        console.log(createLine(row, height))
}

console.log("\nItssa me' a' Mario!");
console.log("-".repeat(30));
printPyramid(5);
console.log("-".repeat(30));
