/* Retro interactions: typewriter header, clock, simple contact mock */
document.addEventListener("DOMContentLoaded", () => {
  // Typewriter effect for the big heading
  typeWriter("type-head", "Welcome to Webdos", 50);

  // Clock in the taskbar
  updateClock();
  setInterval(updateClock, 1000);

  // set year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

function typeWriter(id, text, speed) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = "";
  let i = 0;
  const iv = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(iv);
  }, speed);
}

function updateClock() {
  const c = document.getElementById("clock");
  if (!c) return;
  const d = new Date();
  const mm = String(d.getMinutes()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  c.textContent = `${hh}:${mm}`;
}

function sendContact() {
  const status = document.getElementById("formStatus");
  if (status) status.textContent = "Sending...";
  // retro alert popup
  setTimeout(() => {
    alert("Message sent (this is a demo)");
    if (status) status.textContent = "Message sent (demo)";
  }, 700);
}
