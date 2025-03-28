/* Osnovni stilovi za sajt sa opcijom za upload slike */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

/* Stilizovanje banera */
#banner {
    width: 100%;
    height: 200px; /* Visina banera */
    overflow: hidden; /* Osećaj da slika ne izlazi izvan okvira */
    margin-bottom: 30px; /* Razmak između banera i sadržaja */
}

#banner img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Prilagodite sliku da popuni prostor banera */
}

/* Stilizovanje upload forme */
#upload-container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

#imageUpload {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
}

#showImageButton {
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
}

#showImageButton:hover {
    background-color: #555;
}

#imagePreview {
    max-width: 100%;
    max-height: 90vh;
    display: none; /* Početno sakrivanje slike */
    margin-top: 20px;
}

#imagePreview img {
    width: 100%;
    height: auto;
    max-height: 90vh;
}
