// Scroll Navbar
const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);

  console.log(window.scrollY);
});

// klik untuk menghilangkan nav, hanya perlu di klik bagian luar nav
const menuNav = document.querySelector(".navbar-collapse");
const hamburgerMenu = document.querySelector(".navbar-toggler");

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !menuNav.contains(e.target)) {
    menuNav.classList.remove("show");
  }
});

// email Js
const btnSubmit = document.getElementById("sendMessage");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // mengambil nilai dari input
    const name = document.getElementById("textNama").value;
    const email = document.getElementById("textEmail").value;
    const noHp = document.getElementById("noTelp").value;
    const message = document.getElementById("textPesan").value;

    // btnSubmit.value = "Mengirim...";

    var data = {
      from_name: name,
      from_hp: noHp,
      from_email: email,
      message: message,
    };

    const serviceID = "service_5bcofic";
    const templateID = "template_rfofy42";

    emailjs.send(serviceID, templateID, data).then(
      function (response) {
        alert("Terikirim!", response.status, response.text);

        // Reset nilai input setelah berhasil mengirim
        document.getElementById("textNama").value = "";
        document.getElementById("textEmail").value = "";
        document.getElementById("noTelp").value = "";
        document.getElementById("textPesan").value = "";
      },
      function (error) {
        alert("Gagal Terkirim!", error);
      }
    );
  });
