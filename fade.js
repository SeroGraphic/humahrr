document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ fade.js está cargado");

  const fadeElements = document.querySelectorAll('.fade-in');

  // fallback para navegadores viejos
  if (!("IntersectionObserver" in window)) {
    fadeElements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 100}ms`;
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  fadeElements.forEach(el => observer.observe(el));
});
main.style.paddingTop = `${header.offsetHeight}px`;
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const firstSection = document.querySelector("main > section");
  if (firstSection) {
    firstSection.style.paddingTop = `${header.offsetHeight + 20}px`;
  }
});
