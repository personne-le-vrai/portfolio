const liensMenu = document.querySelectorAll('a[href^="#"]');

liensMenu.forEach(function (lien) {
  lien.addEventListener('click', function (e) {
    const id = lien.getAttribute('href');
    if (id.length < 2) {
      return;
    }
    const cible = document.querySelector(id);
    if (cible) {
      e.preventDefault();
      cible.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const boutonCopie = document.getElementById('btn-copie');
const email = document.getElementById('email').textContent.trim();

boutonCopie.addEventListener('click', function () {
  navigator.clipboard.writeText(email).then(function () {
    boutonCopie.textContent = 'Copié !';
    boutonCopie.classList.add('copie');
    setTimeout(function () {
      boutonCopie.textContent = "Copier l'email";
      boutonCopie.classList.remove('copie');
    }, 2000);
  }).catch(function () {
    boutonCopie.textContent = 'Échec';
    setTimeout(function () {
      boutonCopie.textContent = "Copier l'email";
    }, 2000);
  });
});

const sections = document.querySelectorAll('.section');

const observateur = new IntersectionObserver(function (entrees) {
  entrees.forEach(function (entree) {
    if (entree.isIntersecting) {
      entree.target.classList.remove('cache');
      observateur.unobserve(entree.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(function (section) {
  section.classList.add('cache');
  observateur.observe(section);
});
