window.addEventListener("load", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const profileContainer = document.getElementById("profile-container");
    const typingText = document.getElementById("typing-text");

    // Mulai animasi fade-out untuk loading screen
    loadingScreen.classList.add("fade-out");

    // Setelah animasi fade-out selesai, sembunyikan loading screen dan tampilkan profil
    setTimeout(() => {
        loadingScreen.style.display = "none"; // Sembunyikan loading screen sepenuhnya setelah animasi selesai

        // Hapus kelas hidden pada profile-container dan tambahkan animasi slide-in
        profileContainer.classList.remove("hidden");
        profileContainer.classList.add("slide-in");

        // Setelah profil muncul, tampilkan teks sambutan dengan animasi mengetik
        setTimeout(() => {
            typingText.classList.remove("hidden");
            typingText.style.visibility = "visible"; // Pastikan teks terlihat
        }, 1000); // Tunda teks sambutan agar muncul setelah profil
    }, 1000); // Sesuaikan dengan durasi animasi fade-out di CSS
});
