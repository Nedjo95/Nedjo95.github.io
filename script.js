let selectedImage = null;

// Funkcija za upload slike
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            selectedImage = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        selectedImage = null;
    }
});

// Funkcija za prikaz slike
document.getElementById('showImageButton').addEventListener('click', function() {
    const imagePreview = document.getElementById('imagePreview');
    
    if (selectedImage) {
        imagePreview.innerHTML = `<img src="${selectedImage}" alt="Uploaded Image">`;
        imagePreview.style.display = 'block'; // Prikazivanje slike
    } else {
        imagePreview.innerHTML = '<p>Izaberite sliku da je prikažete ovde.</p>';
    }
});

// Funkcija za aktiviranje inputa za upload slike
document.getElementById('imageUploadButton').addEventListener('click', function() {
    document.getElementById('imageUpload').click();  // Aktivira input za odabir fajla
});
