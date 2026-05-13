/* ============================================================
   Animated Number Counter Effect
   Arquivo: effects/counter-credentials/snippet.js
   Impacto: ★★★★☆ | Onde usar: Credential block, stats
   ============================================================

   USO HTML:
   <span class="counter" data-target="1000" data-suffix="+">0</span>
   <span class="counter" data-target="6" data-suffix="+">0</span>
   <span class="counter" data-target="15" data-suffix=" anos">0</span>

   Atributos:
   - data-target: número final (inteiro)
   - data-suffix: texto após o número ("+", " anos", "k", etc.) — opcional
   - data-duration: duração em ms (padrão: 1800)
   ============================================================ */

(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = parseInt(el.dataset.duration, 10) || 1800;

    if (prefersReduced) {
      el.textContent = target + suffix;
      return;
    }

    const start = performance.now();

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = Math.round(eased * target);
      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
})();
