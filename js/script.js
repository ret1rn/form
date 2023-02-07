let headers = document.querySelectorAll(".header")
let inps = document.querySelectorAll("[data-inp]")
let btn = document.querySelector("button")

let regexes = {
    name: /^[a-z,.'-]+$/i,
    address: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i,
    age: /^\d{1,3}$/,
    about: /\w/i,
    js: /\w/i,
    HTML: /\w/i,
    CSS: /\w/i
}

let pond = "Please enter your"

function validation(regex, val) {
    let label = val.nextElementSibling
    if (regex.test(val.value)) {
        val.classList.remove("false")
        val.classList.add("true")
        label.innerHTML = ""
        val.previousElementSibling.style.color = "blue"
        btn.style.backgroundColor = "blue"
        label.nextElementSibling.style.display = "none"
    } else if (val.value == "" || !regex.test(val.value)) {
        val.classList.remove("true")
        val.classList.add("false")
        label.innerHTML = pond + " " + val.id
        label.classList.add("colorRed")
        val.previousElementSibling.style.color = "red"
        btn.style.backgroundColor = "red"
        label.nextElementSibling.style.display = "block"
    }
}



btn.onclick = () => {
    // inps.forEach(inp => {
    //     inp.classList.remove("false", "true")
    // })
    inps.forEach(inp => {
        validation(regexes[inp.id], inp)
        
    })

}