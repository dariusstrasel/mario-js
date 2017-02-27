


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
function createLine(counter) {
    line = "";
    for (var lineLength = 1; lineLength <= counter; lineLength++)
        line += "#";
    return line
}

function printPyramid(height) {
    var counter = 2;
    while (counter <= height + 1) {
        console.log(createLine(counter));
        counter++;
}

    // TODO
    // print that pyramid!

}
