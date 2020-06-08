import { curry } from "lodash"

let button = document.querySelector("#button")
let input = document.querySelector("#input")

let addEventListener = curry((element, eventType, listener) => {
  element.addEventListener(eventType, listener)
})

let addButtonListener = addEventListener(button)

addButtonListener("click")(() => {
  console.log("clicked")
})

addButtonListener("mouseenter")(() => {
  console.log("enter")
})
addButtonListener("mouseleave")(() => {
  console.log("leave")
})

let addInputListener = addEventListener(input)

addInputListener("input", event => {
  console.log(event.target.value)
})