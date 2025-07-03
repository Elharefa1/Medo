document.getElementById('menuBtn').addEventListener('click', () =>
  document.getElementById('dropdownMenu').classList.toggle('open')
);

const txt = "MEDO";
const el = document.getElementById('typing');
let i = 0, del = false;

(function t() {
  if (!del) {
    el.textContent = txt.substring(0, i++);
    if (i > txt.length) {
      del = true;
      setTimeout(t, 800);
      return;
    }
  } else {
    el.textContent = txt.substring(0, i--);
    if (i < 0) del = false;
  }
  setTimeout(t, del ? 100 : 200);
})();

const translateBtn = document.getElementById('translateBtn');
const aboutCard = document.getElementById('aboutCard');

translateBtn.addEventListener('click', () => {
  aboutCard.classList.toggle('translated');
});

const contactBtn = document.getElementById('contactBtn');

contactBtn.addEventListener('click', () => {
  window.open('https://wa.me/01222941451', '_blank');
});
