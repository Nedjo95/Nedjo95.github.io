// Funkcija za upload slike
let selectedImage = null;

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

// Funkcija za prikaz slike kad klikneš dugme
document.getElementById('showImageButton').addEventListener('click', function() {
    const imagePreview = document.getElementById('imagePreview');
    
    if (selectedImage) {
        imagePreview.innerHTML = `<img src="${selectedImage}" alt="Uploaded Image">`;
    } else {
        imagePreview.innerHTML = '<p>Izaberite sliku da je prikažete ovde.</p>';
    }
});
