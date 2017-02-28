


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
function printPyramid(height) {
    if (height == undefined) {
        height = Number(prompt("Pick a height:\n"))
    }
    for (var brick = "##"; brick.length <= height + 1; brick+="#")
        console.log(brick)
}
