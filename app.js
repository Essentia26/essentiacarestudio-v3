// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const mobile = document.querySelector(".mobile-nav");

if (toggle && mobile) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    mobile.hidden = expanded;
  });

  mobile.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      toggle.setAttribute("aria-expanded", "false");
      mobile.hidden = true;
    }
  });
}

// Ripple en botones (look moderno)
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".ripple");
  if (!btn) return;

  const circle = document.createElement("span");
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);

  circle.style.width = circle.style.height = `${size}px`;
  circle.style.position = "absolute";
  circle.style.borderRadius = "999px";
  circle.style.background = "rgba(255,255,255,.22)";
  circle.style.transform = "scale(0)";
  circle.style.opacity = "1";
  circle.style.pointerEvents = "none";
  circle.style.left = `${e.clientX - rect.left - size / 2}px`;
  circle.style.top  = `${e.clientY - rect.top  - size / 2}px`;
  circle.style.transition = "transform 520ms ease, opacity 700ms ease";

  btn.appendChild(circle);

  requestAnimationFrame(() => {
    circle.style.transform = "scale(1.2)";
    circle.style.opacity = "0";
  });

  setTimeout(() => circle.remove(), 750);
});
