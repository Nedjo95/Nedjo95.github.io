let selectedImage = null;

// Provera Local Storage-a pri učitavanju stranice
window.addEventListener('DOMContentLoaded', function() {
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
        showImage(savedImage);
    }
});

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
            localStorage.setItem('uploadedImage', selectedImage); // Čuvanje u Local Storage
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
        imagePreview.style.display = 'block';
    }
}

// Funkcija za otvaranje dijaloga za odabir slike klikom na dugme
document.getElementById('imageUploadButton').addEventListener('click', function() {
    document.getElementById('imageUpload').click();
});
