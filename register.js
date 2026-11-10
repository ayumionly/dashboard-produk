const form = document.querySelector(".registerForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Mengambil input
    const nama = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const inputsPassword = document.querySelectorAll('input[type="password"]');

    const password = inputsPassword[0].value;
    const konfirmasiPassword = inputsPassword[1].value;

    // Cek password
    if (password !== konfirmasiPassword) {
        alert("Password dan konfirmasi password tidak sama!");
        return;
    }

    // Jika berhasil
    alert("Registrasi berhasil! Selamat datang, " + nama.value);

    // Pindah ke halaman login
    window.location.href = "login.html";
});