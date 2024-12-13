// Mengubah warna header saat pengguna menggulir
window.onscroll = function() { changeHeaderColor() };

function changeHeaderColor() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#333'; // Warna header saat scroll
    } else {
        header.style.backgroundColor = '#000e38'; // Warna asli header
    }
}

// Menampilkan informasi lebih lanjut di modal
function showMoreInfo(phenomenon) {
    const modal = document.getElementById('infoModal');
    const modalText = document.getElementById('modalText');
    
    switch (phenomenon) {
        case 'Hujan':
            modalText.innerText = "Hujan adalah proses presipitasi di mana air jatuh dari awan dalam bentuk tetesan cair. Hujan sangat penting dalam siklus air Bumi.";
            break;
        case 'Angin':
            modalText.innerText = "Angin adalah pergerakan udara yang terjadi karena perbedaan tekanan atmosfer. Angin berperan besar dalam cuaca dan iklim.";
            break;
        case 'Awan':
            modalText.innerText = "Awan terbentuk ketika uap air mengembun di udara dan membentuk kumpulan partikel air atau es. Awan memainkan peran dalam pembentukan cuaca.";
            break;
        default:
            modalText.innerText = "Informasi tidak tersedia.";
            break;
    }

    modal.style.display = "block"; // Menampilkan modal
    modal.classList.add("fadeIn"); // Efek transisi pada modal
}

// Menutup modal
function closeModal() {
    const modal = document.getElementById('infoModal');
    modal.style.display = "none";
    modal.classList.remove("fadeIn"); // Menghapus efek fade-in
}

// Menambahkan efek hover pada card
function hoverEffect(card) {
    card.style.transform = "scale(1.05)"; // Membesarkan card sedikit
    card.style.transition = "transform 0.3s ease-in-out"; // Efek transisi halus
}

function removeHoverEffect(card) {
    card.style.transform = "scale(1)"; // Mengembalikan ukuran card
}

// Menutup modal jika pengguna mengklik di luar modal
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
