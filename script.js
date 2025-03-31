document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");
    const loginContainer = document.getElementById("loginContainer");
    const content = document.getElementById("content");

    // Ako je korisnik ranije kliknuo "Zapamti me", odmah ga prijavi
    if (localStorage.getItem("rememberMe") === "true") {
        showContent();
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Sprečava reload stranice

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const rememberMe = document.getElementById("rememberMe").checked;

        // Provera korisničkog imena i lozinke
        if (username === "admin" && password === "1234") {
            if (rememberMe) {
                localStorage.setItem("rememberMe", "true");
            } else {
                localStorage.removeItem("rememberMe");
            }
            showContent();
        } else {
            errorMessage.textContent = "Pogrešno korisničko ime ili lozinka!";
        }
    });

    function showContent() {
        loginContainer.style.display = "none"; // Sakrijemo login formu
        content.style.display = "block"; // Prikazujemo sadržaj sajta
    }
});
