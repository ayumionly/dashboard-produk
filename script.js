const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const remember = document.getElementById("remember");

// Saat halaman dibuka
window.addEventListener("load", function () {
    const savedEmail = localStorage.getItem("email");

    if (savedEmail) {
        email.value = savedEmail;
        remember.checked = true;
    }
});

// Saat tombol Login ditekan
form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (remember.checked) {
        localStorage.setItem("email", email.value);
    } else {
        localStorage.removeItem("email");
    }

    alert("Login berhasil!");

    // Pindah ke dashboard
    window.location.href = "index.html";
});