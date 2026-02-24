// Floating Hero Image
const heroPhoto = document.getElementById("heroPhoto");

if (heroPhoto) {
  let float = 0;

  function floating() {
    float += 0.015; // أهدى شوية
    const y = Math.sin(float) * 8; // حركة أوضح
    heroPhoto.style.transform = `translateY(${y}px)`;
    requestAnimationFrame(floating);
  }

  requestAnimationFrame(floating);
}

// Button 3D Hover Effect
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    btn.style.transform = `
      perspective(500px)
      rotateX(${ -y * 10 }deg)
      rotateY(${ x * 10 }deg)
      scale(1.05)
    `;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = `
      perspective(500px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  });
});

// Smooth Reveal Animation
const fadeElements = document.querySelectorAll(".reveal");

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      fadeObserver.unobserve(entry.target); // يمنع التكرار
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => {
  fadeObserver.observe(el);
});