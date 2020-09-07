var number = 0
/**
 * Calc function performs add and subtract operations
 * along with nested expressions
 * @param {string} string 
 */
function calc(string) {
    try {
        if (string.includes("expr")) {
            var jsonInput = JSON.parse(string)
            var res = calc(JSON.stringify(jsonInput.expr))
            operate(jsonInput.op, res)
        } else {
            var jsonInput = JSON.parse(string)
            operate(jsonInput.op, jsonInput.number)
        }
        return number
    } catch (e) {
        console.error("Exception occured: " + e)
    }
}
/**
 * Helper function to perform operations
 * @param {string} operation 
 * @param {number} num 
 */
function operate(operation, num) {
    if (operation === "add") {
        number += num
    } else if (operation === "subtract") {
        number -= num
    } else {
        throw "Unsupported operation: " + operation
    }
}

// Test Cases
// console.log(calc('{"op": "subtract", "expr" : {"op" : "add", "number" : 15}}'))
// console.log(calc('{"op": "add", "expr" : {"op" : "add", "expr" : {"op" : "subtract", "number" : 3}}}'))