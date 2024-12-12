document.addEventListener("DOMContentLoaded", () => {
    const book = document.getElementById("book");

    (async () => {
        const jumlah = parseInt(prompt("Masukan jumlah buku: "))

        for (let i = 0; i < jumlah; i++) {
            book.innerHTML += `<img src="../assets/book-1.png" alt="">`
        }
    })()
})