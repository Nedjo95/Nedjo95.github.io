<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dobrodošli na Moj GitHub Sajt</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#about">O meni</a></li>
                <li><a href="#projects">Projekti</a></li>
                <li><a href="#upload">Upload Sliku</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h1>Dobrodošli na moj sajt!</h1>
        <p>Ovo je moj GitHub web sajt. Ovdje možete pronaći informacije o mojim projektima i kontaktirati me.</p>
    </section>

    <section id="projects">
        <h2>Moji Projekti</h2>
        <ul>
            <li><a href="https://github.com/username/projekat1">Projekat 1</a> - Opis projekta 1</li>
            <li><a href="https://github.com/username/projekat2">Projekat 2</a> - Opis projekta 2</li>
            <li><a href="https://github.com/username/projekat3">Projekat 3</a> - Opis projekta 3</li>
        </ul>
    </section>

    <section id="upload">
        <h2>Upload Slike</h2>
        <form id="imageUploadForm">
            <input type="file" id="imageUpload" accept="image/*">
        </form>
        <button id="showImageButton">Prikaži Sliku</button>
        <div id="imagePreview" class="image-preview">
            <p>Izaberite sliku da je prikažete ovde.</p>
        </div>
    </section>

    <section id="contact">
        <h2>Kontaktirajte me</h2>
        <p>Email: <a href="mailto:ime@example.com">ime@example.com</a></p>
    </section>

    <footer>
        <p>&copy; 2025 Moje ime. Sva prava zadržana.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
