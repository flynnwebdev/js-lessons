// function Person(name, age) {
//     this.name = name
//     this.age = age
// }

// Person.prototype.awesome = true
// Person.prototype.shout = function () {
//     return `My name is ${this.name.toUpperCase()}!!!`
// }

// const instructor = new Person("Matt", 48)
// const ta = new Person("Glen", 28)
// console.log(instructor.shout())

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
//     area() {
//         return this.height * this.width
//     }
// }

// const rect = new Rectangle(10, 5)
// console.log(rect.area())

// class StockItem {
//     static total = 0

//     constructor(description, qty) {
//         this.description = description
//         this.qty = qty
//         StockItem.total += qty
//     }
// }

// const warehouse = [
//     new StockItem("CPU", 10),
//     new StockItem("Motherboard", 5),
//     new StockItem("RAM", 20)
// ]

// const cpu = warehouse.find(x => x.description.toUpperCase() == "CPU")
// console.log(`Total stock: ${cpu.qty}`)

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     speak() {
//         return `My name is ${this.name}`
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name)
//         this.breed = breed
//     }
//     speak() {
//         return `Woof! ${super.speak()}, I'm a ${this.breed}!`
//     }
// }

// const ted = new Dog("Ted", "Border Collie")

// const student = {
//     name: "John",
//     course: "none"
// }

// const fastTrackStudent = {
//     course: "FT",
//     start: "August"
// }

// const CAStudent = {
//     languages: ["ruby", "javascript"],
//     speak: () => console.log("I can do it!")
// }

// const john = Object.assign(student, fastTrackStudent, CAStudent)
// console.log(john)
// john.speak()

// the mixin
const area = {
    setUnits(units) {
        this.units = units
    },
    getArea() {
        return this.length * this.width
    },

}

class Rectangle {
    constructor(length, width) {
        this.length = length
        this.width = width
    }
    toString() {
        return `${this.getArea()} ${this.units}`
    }
}

Object.assign(Rectangle.prototype, area)

const shape = new Rectangle(3, 5)
shape.setUnits("cm")
console.log(''+shape)
