function validateLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "Hian" && pass === "jhenefher Maria Da Silva assis") {
        document.getElementById("loginScreen").classList.add("hidden");
        document.getElementById("menuScreen").classList.remove("hidden");
    } else {
        alert("Senha errada, amor 😿");
    }
}

function showPage(pageId) {
    document.getElementById("menuScreen").classList.add("hidden");
    document.getElementById(pageId).classList.remove("hidden");
}

function returnMenu() {
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
    document.getElementById("menuScreen").classList.remove("hidden");
}
