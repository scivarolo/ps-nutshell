/*
  author(s): Elyse
  purpose: Event listeners for section navigation
*/
import clear from "./clear"
import loadMessages from "./Message/msgOutput"

// Grab nav elements
const friendsNav = document.getElementById("friends")
const chatNav = document.getElementById("chat")
const todoNav = document.getElementById("todo")
const eventsNav = document.getElementById("events")
const newsNav = document.getElementById("news")
const logoutNav = document.getElementById("logout")

const mainContainer = document.querySelector(".main-container")

// adds event listeners to each nav element
let navListeners = () => {
  friendsNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>Your Friends</h>"
  })
  chatNav.addEventListener("click", () => {
    clear()
    loadMessages()
  })
  todoNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>Your To Do List</h>"
  })
  eventsNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>Your Events</h>"
  })
  newsNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>Your News</h>"
  })
  logoutNav.addEventListener("click", () => {
    clear()
    mainContainer.innerHTML = "<h>GET OUT WE DON'T WANT YOU ANYWAY!</h>"
  })
}

export default navListeners
