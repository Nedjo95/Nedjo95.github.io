let selectedImage = null;

// Funkcija za upload slike
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];  // Uzimamo prvi izabrani fajl

    if (file) {
        const reader = new FileReader();  // Kreiramo FileReader

        reader.onload = function(e) {
            selectedImage = e.target.result;  // Učitavamo sliku
        };

        reader.readAsDataURL(file);  // Učitaj sliku kao Data URL
    }
});

// Funkcija za otvaranje dijaloga za odabir slike klikom na dugme
document.getElementById('imageUploadButton').addEventListener('click', function() {
    document.getElementById('imageUpload').click();  // Aktivira input za odabir fajla
});

// Funkcija za prikazivanje slike nakon selekcije
document.getElementById('showImageButton').addEventListener('click', function() {
    const imagePreview = document.getElementById('imagePreview');
    
    if (selectedImage) {
        imagePreview.innerHTML = `<img src="${selectedImage}" alt="Uploaded Image" class="uploaded-image">`;
        imagePreview.style.display = 'block';  // Prikazivanje slike
    } else {
        imagePreview.innerHTML = '<p>Izaberite sliku da je prikažete ovde.</p>';
        imagePreview.style.display = 'block';  // Prikazivanje poruke ako slika nije izabrana
    }
});
