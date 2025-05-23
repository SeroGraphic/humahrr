
  // menu.js

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove("show");
    }
  });

  // Oculta header al hacer scroll hacia abajo, lo muestra al subir
  let lastScrollY = window.scrollY;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      header.classList.add("hide-on-scroll");
    } else {
      header.classList.remove("hide-on-scroll");
    }
    lastScrollY = window.scrollY;
  });

  // Scroll top button
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
        scrollBtn.style.opacity = "1";
      } else {
        scrollBtn.style.opacity = "0";
        setTimeout(() => { scrollBtn.style.display = "none"; }, 300);
      }
    });
  }
});