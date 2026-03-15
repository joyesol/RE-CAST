// script.js - Re:Cast app interactions

document.addEventListener('DOMContentLoaded', () => {

  // ===== Banner dot sync & interaction =====
  const bannerTrack = document.getElementById('bannerTrack');
  const dots = document.querySelectorAll('.slider-dot');

  if (bannerTrack && dots.length > 0) {
    // 1. Update dots on scroll
    bannerTrack.addEventListener('scroll', () => {
      const scrollLeft = bannerTrack.scrollLeft;
      const width = bannerTrack.clientWidth;
      const activeIndex = Math.round(scrollLeft / width);

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    });

    // 2. Click dot to scroll
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const width = bannerTrack.clientWidth;
        bannerTrack.scrollTo({
          left: width * index,
          behavior: 'smooth'
        });
      });
    });
  }

  console.log('Re:Cast app initialized');
});

// ===== 인기 캐스팅 해설: Dynamic Roles =====

const roleData = {
  deathnote: ["야가미 라이토", "엘", "렘", "류크", "아마네 미사", "야가미 소이치로", "야가미 사유"],
  werther: ["베르테르", "알배르트", "롯데", "카인즈"],
  rebecca: ["나(I)", "막심 드 윈터", "댄버스 부인", "잭 파벨"],
  beetlejuice: ["비틀쥬스", "리디아", "아담", "바바라", "찰스", "델리아"]
};

function updateCastRoles(musicalKey) {
  const container = document.getElementById('roleCapsuleRow');
  if (!container) return;

  // Update poster highlight
  const posters = document.querySelectorAll('.cast-poster-card');
  posters.forEach(p => {
    // Check if the onclick contains the key
    p.classList.toggle('active', p.getAttribute('onclick').includes(musicalKey));
  });

  // Clear existing capsules
  container.innerHTML = '';

  // Add new capsules
  const roles = roleData[musicalKey] || [];
  roles.forEach(role => {
    const btn = document.createElement('button');
    btn.className = 'role-capsule';
    btn.textContent = role;
    btn.onclick = function() { toggleCapsule(this); };
    container.appendChild(btn);
  });
}

function toggleCapsule(element) {
  element.classList.toggle('role-capsule--active');
}
