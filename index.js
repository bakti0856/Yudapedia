// Tahun di footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");

function handleReveal() {
  const trigger = window.innerHeight * 0.9;
  revealEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// Glow ikut cursor
const cursorGlow = document.querySelector(".cursor-glow");
let glowVisible = false;

window.addEventListener("mousemove", (e) => {
  if (!cursorGlow) return;
  const x = e.clientX;
  const y = e.clientY;
  cursorGlow.style.transform = `translate3d(${x - 110}px, ${y - 110}px, 0)`;
  if (!glowVisible) {
    glowVisible = true;
    cursorGlow.style.opacity = "1";
  }
});

window.addEventListener("mouseleave", () => {
  if (!cursorGlow) return;
  cursorGlow.style.opacity = "0";
  glowVisible = false;
});
