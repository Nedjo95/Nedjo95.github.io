
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        };

        reader.readAsDataURL(file);
    } else {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.innerHTML = '<p>Izaberite sliku da je prikažete ovde.</p>';
    }
});