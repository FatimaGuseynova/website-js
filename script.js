// language change

const lang = document.getElementById("language")

lang.addEventListener("change", function () {

    const select = document.querySelector(".goog-te-combo")

    if (select) {
        select.value = this.value
        select.dispatchEvent(new Event("change"))
    }

})

// dropdown

let hamMenu = document.getElementById("hamMenu")
let menuIcon = document.getElementById("menuIcon")
let newIcon = document.getElementById("newIcon")


function menud() {
    if (hamMenu.style.display === "block") {
        hamMenu.style.display = "none"
        menuIcon.style.display = "block"
        newIcon.style.display = "none"
    }
    else {
        hamMenu.style.display = "block"
        menuIcon.style.display = "none"
        newIcon.style.display = "block"
    }

}

// slider
let fir = document.getElementById("fir")
let sec = document.getElementById("sec")
let thi = document.getElementById("thi")

function next() {
    if (fir.style.display == "block") {
        fir.style.display = "none"
        sec.style.display = "block"
    }
    else {
        fir.style.display == "block"
    }
}


// passport

let passport = document.getElementById("passport")

function passp() {
    if (passport.style.display == "block") {
        passport.style.display = "none"
    }
    else {
        passport.style.display = "block"
    }
}

// agreement

let agreement = document.getElementById("agreement")
let confirm = document.getElementById("confirm")

function agree() {
    if (agreement.style.backgroundColor === "rgb(37, 99, 235)") {
        agreement.style.backgroundColor = "white"
        agreement.style.borderColor = "#d1d5db"
        confirm.style.backgroundColor = "#d1d5db"
        confirm.style.color = "gray"
    }
    else {
        agreement.style.backgroundColor = "rgb(37, 99, 235)"
        agreement.style.borderColor = "rgb(37, 99, 235)"
        confirm.style.backgroundColor = "rgb(37, 99, 235)"
        confirm.style.color = "white"
    }
}




