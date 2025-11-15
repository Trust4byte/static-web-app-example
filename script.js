// Small interactive behaviours: theme toggle, scroll reveal, simple contact mock
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const stored = localStorage.getItem("site-theme");
  if (stored === "light") body.classList.add("light");
  updateToggleIcon();

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    localStorage.setItem(
      "site-theme",
      body.classList.contains("light") ? "light" : "dark"
    );
    updateToggleIcon();
  });

  // reveal on scroll
  const reveals = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((r) => io.observe(r));

  // set year
  document.getElementById("year").textContent = new Date().getFullYear();
});

function updateToggleIcon() {
  const t = document.getElementById("themeToggle");
  t.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
}

function sendContact() {
  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";
  setTimeout(() => {
    status.textContent = "Thanks — message sent (mock).";
  }, 900);
}
