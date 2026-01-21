// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 15 + 20 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 400);

// Popup messages
function openPopup(photoNumber) {
  const popup = document.getElementById("popup");
  const text = document.getElementById("popupText");

  if (photoNumber === 1) {
    text.innerHTML = "You are the safest place my heart has ever known 🤍";
  } 
  else if (photoNumber === 2) {
    text.innerHTML = "With you, even ordinary days feel like blessings 🌙❤️";
  } 
  else if (photoNumber === 3) {
    text.innerHTML = `
      To my Qalbi ❤️<br><br>

      Like this year, I wish we stay together forever — creating memories,
      holding onto each other no matter what life throws at us.<br><br>

      I feel most alive, most loved, and most calm when I am with you.
      I’ll cling to you forever, so please bear with me 🤍<br><br>

      I hope the coming years are easy and gentle with you.
      I pray that we remain together <b>Fid Dunya wal Akhira</b>.<br><br>

      Happy Birthday, Thangam 🎂❤️
    `;
  }

  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Music
const music = document.getElementById("bgMusic");
function toggleMusic() {
  music.paused ? music.play() : music.pause();
}

// Scroll fade
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.3 });

document.querySelectorAll(".fade").forEach(el => observer.observe(el));
