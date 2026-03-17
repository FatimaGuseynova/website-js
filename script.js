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
    if (hamMenu.style.display === "block"){
        hamMenu.style.display = "none"
        menuIcon.style.display = "block"
        newIcon.style.display = "none"
    } 
    else{
        hamMenu.style.display = "block"
        menuIcon.style.display = "none"
        newIcon.style.display = "block"
    }

}

