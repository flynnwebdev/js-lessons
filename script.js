const person = {
    name: "Matt",
    address: {
        city: "Brisbane",
        postcode: 4000
    }
}

const foo = ["abc", 123]

const greet = name => name ? `Hello, ${name}!` : "You didn't supply a name!"

console.log(greet("Matt"))
console.log(foo)
