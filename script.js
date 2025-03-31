let selectedImage = null;

// Provera LocalStorage-a pri učitavanju stranice
window.addEventListener('DOMContentLoaded', function() {
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
        showImage(savedImage); // Ako postoji slika u LocalStorage, prikaži je odmah
    }
});

// Funkcija za učitavanje nove slike
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            selectedImage = e.target.result;
            localStorage.setItem('uploadedImage', selectedImage); // Čuvanje slike u LocalStorage
            showImage(selectedImage); // Odmah prikazujemo sliku
        };
        reader.readAsDataURL(file);
    }
});

// Funkcija za prikazivanje slike
function showImage(imageSrc) {
    const imagePreview = document.getElementById('imagePreview');
    if (imageSrc) {
        // Prikazujemo sliku odmah
        imagePreview.innerHTML = `<img src="${imageSrc}" alt="Uploaded Image" class="uploaded-image">`;
        imagePreview.style.display = 'block'; // Osigurajte da je slika vidljiva
    }
}

// Funkcija za otvaranje dijaloga za odabir slike klikom na dugme
document.getElementById('imageUploadButton').addEventListener('click', function() {
    document.getElementById('imageUpload').click(); // Otvorite dijalog za odabir slike

    document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    // Ako su podaci sačuvani, popuni polja
    if (localStorage.getItem("rememberMe") === "true") {
        document.getElementById("username").value = localStorage.getItem("username");
        document.getElementById("rememberMe").checked = true;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Sprečava reload stranice

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const rememberMe = document.getElementById("rememberMe").checked;

        // Ovde možeš dodati pravu proveru (bazu podataka)
        if (username === "admin" && password === "1234") {
            // Čuvamo podatke ako korisnik klikne "Zapamti me"
            if (rememberMe) {
                localStorage.setItem("rememberMe", "true");
                localStorage.setItem("username", username);
            } else {
                localStorage.removeItem("rememberMe");
                localStorage.removeItem("username");
            }

            alert("Uspešno ste prijavljeni!");
            window.location.href = "dashboard.html"; // Preusmeravanje na drugu stranicu
        } else {
            errorMessage.textContent = "Pogrešno korisničko ime ili lozinka!";
        }
    });


});
