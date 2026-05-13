/* ============================================================
   Before/After Image Slider Effect
   Arquivo: effects/before-after-slider/snippet.js
   Impacto: ★★★★★ | Onde usar: Galeria de resultados clínicos
   ============================================================ */

(function () {
  function initSlider(slider) {
    const before = slider.querySelector('.ba-before');
    const handle = slider.querySelector('.ba-handle');
    let dragging = false;

    function setPosition(pct) {
      pct = Math.max(2, Math.min(98, pct));
      const pctStr = (100 - pct) + '%';
      before.style.clipPath = `inset(0 ${pctStr} 0 0)`;
      handle.style.left = pct + '%';
    }

    function getPercent(clientX) {
      const rect = slider.getBoundingClientRect();
      return ((clientX - rect.left) / rect.width) * 100;
    }

    slider.addEventListener('mousedown', (e) => {
      dragging = true;
      setPosition(getPercent(e.clientX));
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      setPosition(getPercent(e.clientX));
    });

    window.addEventListener('mouseup', () => { dragging = false; });

    slider.addEventListener('touchstart', (e) => {
      dragging = true;
      setPosition(getPercent(e.touches[0].clientX));
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!dragging) return;
      setPosition(getPercent(e.touches[0].clientX));
    }, { passive: true });

    window.addEventListener('touchend', () => { dragging = false; });

    // Inicializa em 50%
    setPosition(50);
  }

  function init() {
    document.querySelectorAll('.ba-slider').forEach(initSlider);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
