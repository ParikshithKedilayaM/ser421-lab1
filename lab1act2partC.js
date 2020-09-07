function PreCalc(initialValue) {
    this.items = [initialValue];

    this.push = (element) => {
        this.items.push(element)
    }
    this.pop = () => {
        if (!this.isEmpty()) {
            return this.items.pop()
        } else {
            return "(what? You have an empty stack now)"
        }
    }
    this.peek = () => {
        return this.items[this.items.length - 1]
    }
    this.isEmpty = () => {
        return this.items.length === 0
    }
    this.print = () => {
        var str = ""
        for (var i = this.items.length - 1; i >= 0; i--) {
            str += this.items[i] + " ";
        }
        str = "[" + str.trim() + "]"
        return str
        // return "[" + this.items.toString() + "]"
    }
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