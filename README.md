<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moj Web Sajt</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>DNEVNI IZVEŠTAJ</h1>
    </header>

    <main>
        <section class="images">
            <h2>Moje slike</h2>
            <div class="image-container">
                <img src="slika1.jpg" alt="Slika 1" class="image">
                <img src="slika2.jpg" alt="Slika 2" class="image">
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Moj Web Sajt</p>
    </footer>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

main {
    padding: 20px;
}

.images {
    text-align: center;
}

.image-container {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.image {
    width: 200px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    width: 100%;
    bottom: 0;
}
