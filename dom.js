const div = document.querySelector("div")
const p = document.querySelector("p")

div.addEventListener("click", event => {
    console.log("DIV clicked!")
}, { once: true })

p.addEventListener("click", event => {
    console.log("P clicked!")
})

const items = [ "Tea", "Coffee", "Milk" ]

items.forEach((item, index) => {
    let newLi = document.createElement("li")
    document.querySelector("ul").appendChild(newLi)
    newLi.innerHTML = item
    newLi.dataset["index"] = index
})

const h1 = document.querySelector("h1")

h1.addEventListener("click", (event) => {
    event.target.classList.toggle("blue")
})
