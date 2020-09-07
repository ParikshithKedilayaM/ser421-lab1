/**
 * PreCalc class contains a stack with
 * push, pop, peek, isEmpty, print, calc operations in it
 * @param {number} initialValue 
 */
function PreCalc(initialValue = 0) {
    this.calStack = [initialValue];

    this.push = (element) => {
        this.calStack.push(element)
    }
    this.pop = () => {
        if (!this.isEmpty()) {
            return this.calStack.pop()
        } else {
            return "(what? You have an empty stack now)"
        }
    }
    this.peek = () => {
        return this.calStack[this.calStack.length - 1]
    }
    this.isEmpty = () => {
        return this.calStack.length === 0
    }
    this.print = () => {
        var str = ""
        for (var i = this.calStack.length - 1; i >= 0; i--) {
            str += this.calStack[i] + " ";
        }
        str = "[" + str.trim() + "]"
        return str
        // return "[" + this.calStack.toString() + "]"
    }
    /**
     * Calc function performs various operations handling JSON values.
     * @param {string} string 
     */
    this.calc = (string) => {
        try {
            if (string.includes("expr")) {
                var jsonInput = JSON.parse(string)
                var res = this.calc(JSON.stringify(jsonInput.expr))
                return this.operate(jsonInput.op, res)
            } else {
                var jsonInput = JSON.parse(string)
                return this.operate(jsonInput.op, jsonInput.number)
            }
        } catch (e) {
            console.error("Exception occured: " + e)
        }
    }
    /**
     * Helper function which performs operations
     * @param {string} operation 
     * @param {number} num 
     */
    this.operate = (operation, num) => {
        switch (operation) {
            case "add":
                return this.peek() + num
            case "subtract":
                return this.peek() - num
            case "push":
                this.push(num)
                return num
            case "pop":
                return this.pop()
            case "print":
                console.log(this.print())
                break
            // return this.print()
            default:
                throw "Unsupported operation: " + operation
        }
    }
}

var preCalc = new PreCalc(0)

// Test Cases
// console.log(preCalc.calc('{"op" : "add", "number" : 5}'))
// console.log(preCalc.calc('{"op" : "push", "expr" : {"op" : "subtract", "number" : 2}}'))
// console.log(preCalc.calc('{"op" : "push", "expr" : {"op" : "add", "number" : 19}}'))
// console.log(preCalc.calc('{"op" : "pop"}'))
// preCalc.calc('{"op" : "print"}')
// console.log(preCalc.calc('{"op" : "push", "expr" : {"op" : "add", "expr": {"op" : "pop"}}}'))
// preCalc.calc('{"op" : "print"}')
// console.log(preCalc.calc('{"op" : "pop"}'))
// console.log(preCalc.calc('{"op" : "pop"}'))
// console.log(preCalc.calc('{"op" : "pop"}'))