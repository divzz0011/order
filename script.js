const openBtn = document.getElementById('openOrderBtn');
const modal = document.getElementById('orderModal');
const closeBtn = document.getElementById('closeModal');
const orderOptions = document.querySelectorAll('.order-option');
const darkToggle = document.getElementById('darkToggle');

// Nomor WhatsApp
const noWhatsApp = '6281818833633';

// Buka modal (jika ada tombolnya)
if (openBtn && modal) {
  openBtn.addEventListener('click', () => {
    modal.classList.add('show');
  });
}

// Tutup modal
if (closeBtn && modal) {
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
}

// Kirim pesan ke WhatsApp
orderOptions.forEach(button => {
  button.addEventListener('click', () => {
    const message = button.getAttribute('data-message');
    const url = `https://wa.me/${noWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });
});

// Toggle dark mode (khusus jika tombolnya ada)
if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

// Animasi masuk pada elemen .project
window.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.3 + 0.2}s`;
  });

  // Aktifkan dark mode permanen di halaman portofolio
  if (document.querySelector(".portfolio-gallery")) {
    document.body.classList.add('dark');
  }
});
