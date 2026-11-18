const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav-links a')];
const setActive = () => {
  const y = window.scrollY + 120;
  let current = sections[0]?.id;
  sections.forEach(section => {
    if (y >= section.offsetTop) current = section.id;
  });
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
};
window.addEventListener('scroll', setActive);
setActive();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// PILIHAN JENIS SAMPAH ORGANIK
const wasteChips = document.querySelectorAll('.waste-chip');
const wasteTipText = document.getElementById('wasteTipText');
const wasteInfoBanner = document.getElementById('wasteInfoBanner');
const selectedWasteLabel = document.getElementById('selectedWasteLabel');

wasteChips.forEach(chip => {
  chip.addEventListener('click', () => {
    wasteChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    // Update label & tips sesuai jenis sampah yang dipilih
    const cleanName = chip.textContent.replace(/^[^\w]+/, '').trim();
    if (selectedWasteLabel) selectedWasteLabel.textContent = cleanName;
    if (wasteTipText) wasteTipText.textContent = chip.dataset.tip;

    // Animasi pop halus pada banner info
    if (wasteInfoBanner) {
      wasteInfoBanner.classList.remove('bump');
      void wasteInfoBanner.offsetWidth;
      wasteInfoBanner.classList.add('bump');
    }
  });
});

// KALKULATOR ECO ENZYME (Rasio 3 : 1 : 10)
const wasteInput = document.getElementById('wasteInput');
const sugarResult = document.getElementById('sugarResult');
const waterResult = document.getElementById('waterResult');
const jarResult = document.getElementById('jarResult');
const presetBtns = document.querySelectorAll('.preset-btn');
const resultCards = document.querySelectorAll('.res-card');

function formatWeight(grams) {
  if (grams >= 1000) {
    const kg = (grams / 1000).toLocaleString('id-ID', { maximumFractionDigits: 2 });
    return `${grams.toLocaleString('id-ID')} gr (${kg} kg)`;
  }
  return `${Math.round(grams).toLocaleString('id-ID')} gram`;
}

function formatVolume(ml) {
  if (ml >= 1000) {
    const liter = (ml / 1000).toLocaleString('id-ID', { maximumFractionDigits: 2 });
    return `${Math.round(ml).toLocaleString('id-ID')} ml (${liter} L)`;
  }
  return `${Math.round(ml).toLocaleString('id-ID')} ml`;
}

function triggerResultAnimation() {
  resultCards.forEach(card => {
    card.classList.remove('pop');
    void card.offsetWidth;
    card.classList.add('pop');
  });
}

function calculateEcoEnzyme(animate = false) {
  const waste = parseFloat(wasteInput?.value) || 0;
  if (waste <= 0) {
    sugarResult.textContent = '0 gram';
    waterResult.textContent = '0 ml';
    jarResult.textContent = '-';
    return;
  }

  // Rasio 3 (sampah) : 1 (gula) : 10 (air)
  const sugar = waste / 3;
  const water = (waste / 3) * 10;

  // Total volume campuran dalam liter + 30% ruang gas fermentasi
  const totalContentLiter = (waste + sugar + water) / 1000;
  const recommendedJarLiter = Math.ceil((totalContentLiter / 0.7) * 2) / 2;

  sugarResult.textContent = formatWeight(sugar);
  waterResult.textContent = formatVolume(water);
  jarResult.textContent = `Minimal ${recommendedJarLiter.toLocaleString('id-ID')} Liter`;

  if (animate) triggerResultAnimation();
}

wasteInput?.addEventListener('input', () => {
  presetBtns.forEach(btn => btn.classList.remove('active'));
  calculateEcoEnzyme(true);
});

presetBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    presetBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    wasteInput.value = btn.dataset.gram;
    calculateEcoEnzyme(true);
  });
});

// Jalankan perhitungan awal saat halaman dimuat
calculateEcoEnzyme(false);

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});