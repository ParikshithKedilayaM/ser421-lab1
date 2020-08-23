var number = 0
function calc(string) {
    var jsonInput = JSON.parse(string)
    var operation = jsonInput.op
    if (operation === "add") {
        number += jsonInput.number
    } else if (operation === "subtract") {
        number -= jsonInput.number
    } else {
        console.error("Unsupported operation: " + operation)
    }
    return number
}

// Test Cases
calc('{"op" : "add", "number" : 5}')
calc('{"op" : "subtract", "number" : 2}')
calc('{"op" : "add", "number" : 19}')