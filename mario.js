


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
    for (var step = 2; step <= height + 1; step++)
        console.log(createLine(step, height))
}

// function printPyramid(height) {
//     if (height == undefined) {
//         height = Number(prompt("Pick a height:\n"))
//     }
//     for (var brick = "##"; brick.length <= height + 1; brick+="#")
//         console.log(brick)
// }
