var name = window.localStorage.getItem("name")

console.log(name)
if (name) {
    name = window.prompt("Who are you?")
    window.localStorage.setItem("name", name)
} else {
    alert(name)
}
