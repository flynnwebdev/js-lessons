const age = 5

if (age >= 21) {
    console.log("You are an adult")
} else if (age >= 13) {
    console.log("You are a teenager")
} else {
    console.log("You are a child")
}

let allowed = age >= 18 ? true : false

const fav_bird = "Robin"

// case fav_bird
// when "crow"
//     puts
// when "robin"
//     puts
// else
//     puts
// end

switch (fav_bird.toLowerCase()) {
    case 'crow':
    case 'raven':
        console.log("You like Crows!")
        break
    case 'robin':
        console.log("You like Robins!")
        break
    default:
        console.log("I don't know that bird!")
}

let count = -1

while (count > 0) {
    console.log(count)
    count--
}


let input = "blue"

// do {
//     input = prompt("What's my favourite color?")
// } while (input != "blue")


// (0..9).each { | x | puts x }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

const fav_foods = ["pizza", "cake", "pasta"]

fav_foods.forEach((foo, index) => {
    console.log(`I like ${foo}`)
})

// for (let food of fav_foods) {
//     console.log(`I like ${food}`)
// }

const cohort = {
    name: "FastTrack Brisbane",
    students: 19,
    teachers: ["Matt", "Glen"]
}

for (let key in cohort) {
    console.log(`${key} = ${cohort[key]}`)
}


const numbers = [12, 45, 32, 91]

const timestwo = numbers.map(val => val * 2)
console.log(timestwo)


const shop1 = ["apple", "banana", "orange"]
const shop2 = ["toilet paper", "sanitizer"]

const shop_all = [...shop1, ...shop2, "orange juice"]

console.log(shop_all)

const [fruit1, foo, bar] = shop1

// const fruit1 = shop1[0]
// const foo = shop1[1]
// const bar = shop1[2]

const { name, students } = cohort
console.log(name)
console.log(students)

// const name = cohort.name
// const students = cohort.students
