let selectedImage = null;

// Funkcija za otvaranje/zatvaranje menija
document.getElementById('menuButton').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// Funkcija za učitavanje nove slike
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            selectedImage = e.target.result;
            showImage(); // Poziv funkcije odmah nakon odabira slike
        };
        reader.readAsDataURL(file);
    }
});
// Funkcija za prikazivanje slike
document.getElementById('showImageButton').addEventListener('click', function() {
    const imagePreview = document.getElementById('imagePreview');
    if (selectedImage) {
        imagePreview.innerHTML = `<img src="${selectedImage}" alt="Uploaded Image" class="uploaded-image">`;
        imagePreview.style.display = 'block';
    } else {
        imagePreview.innerHTML = '<p>Izaberite sliku da je prikažete ovde.</p>';
        imagePreview.style.display = 'block';
    }
});

// Funkcija za otvaranje dijaloga za odabir slike klikom na dugme
document.getElementById('imageUploadButton').addEventListener('click', function() {
    document.getElementById('imageUpload').click();
});
