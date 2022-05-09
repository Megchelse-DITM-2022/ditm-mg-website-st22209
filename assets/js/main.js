


function e() {
    const div = document.getElementById("rickroll")

    if (div.style.display == "" || div.style.display == "none") {
        div.style.display = "block"
    } else {
        div.style.display = "none"
    }
    div.currentTime = 0;
}
