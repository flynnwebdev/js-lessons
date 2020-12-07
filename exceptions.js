// const reducer = (acc, value) => acc + value

// const adder = (x, y, ...foo) => {
//     // return foo
//     // console.log(`x: ${x}, y: ${y}`)
//     // return x+y
//     // let sum = x + y
//     // for (let num of foo) {
//     //     sum += num
//     // }
//     // return sum
//     foo.push(x, y)
//     return foo.reduce(reducer)
// }

// console.log(adder(1, 2, 3, 14))


// function add(a, b) {
//     return a+b
// }

// function subtract(a, b) {
//     return a-b
// }

// function calculate(callback, x, y) {
//     console.log(callback(x,y))
// }

// calculate(subtract, 5, 3)
// calculate(add, 5, 3)
// calculate((x, y) => `x: ${x}, y: ${y}`, 10, 20)

function CustomError(message) {
    this.message = message
    this.name = "CustomError"
}

function subtractTwoThings(num1, num2) {
    answer = num1 - num2
    if (isNaN(answer)) {
        throw new CustomError("Invalid input - must be numeric")
    }
    return answer
}

// try {
    let x = subtractTwoThings(43, "Jim")
    alert(`Answer: ${x}`)
// } catch (error) {
//     alert(`Error: ${error.message}`)
// }
// try {
//     throw new CustomError("something went wrong")
//     console.log("after throw")
// } catch (error) {
//     console.log(`Error: ${JSON.stringify(error)}`)
// }
// console.log("after catch")
