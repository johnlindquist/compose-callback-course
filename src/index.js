import { curry } from "lodash"

let button = document.querySelector("#button")
let input = document.querySelector("#input")


let addEventListener = (element, eventType, listener) => {
  element.addEventListener(eventType, listener)
}

addEventListener = curry(addEventListener)

let addButtonListener = addEventListener(button)


let addButtonClickListener = addButtonListener("click")

addButtonClickListener(() => {
  console.log("clicked")
})

addButtonClickListener(() => {
  console.log("track click")
})

addButtonListener("mouseenter", () => {
  console.log("enter")
})

addButtonListener("mouseleave", () => {
  console.log("leave")
})

addEventListener(input, "input", event => {
  console.log(event.target.value)
})