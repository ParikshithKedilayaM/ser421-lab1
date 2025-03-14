var number = 0
/**
 * Calc function performs basic add and subtract operations
 * @param {string} string 
 */
function calc(string) {
    try {
        var jsonInput = JSON.parse(string)
        var operation = jsonInput.op
        if (operation === "add") {
            number += jsonInput.number
        } else if (operation === "subtract") {
            number -= jsonInput.number
        } else {
            throw "Unsupported operation: " + operation
        }
        return number
    } catch (e) {
        console.error("Exception occured: " + e)
    }
}

// Test Cases
// console.log(calc('{"op" : "add", "number" : 5}'))
// console.log(calc('{"op" : "subtract", "number" : 2}'))
// console.log(calc('{"op" : "addi", "number" : 19}'))