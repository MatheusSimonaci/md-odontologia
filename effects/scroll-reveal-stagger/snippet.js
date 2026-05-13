/* ============================================================
   Scroll Reveal Stagger Effect
   Arquivo: effects/scroll-reveal-stagger/snippet.js
   Impacto: ★★★★☆ | Onde usar: Grids de cards, listas
   ============================================================

   USO HTML:
   Adicione data-reveal a qualquer container:
   <div class="services-grid" data-reveal>
     <div class="service-card">...</div>
     <div class="service-card">...</div>
   </div>

   Os filhos diretos recebem stagger automático.
   Para revelar um elemento único (não-grid), use data-reveal no elemento:
   <div class="section-header" data-reveal>...</div>

   Opções via atributo:
   - data-reveal-delay="200"   → delay base em ms entre itens (padrão: 100)
   - data-reveal-threshold="0.2" → % visível para disparar (padrão: 0.15)
   ============================================================ */

(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DEFAULT_DELAY = 100;
  const DEFAULT_THRESHOLD = 0.15;

  function setup() {
    const containers = document.querySelectorAll('[data-reveal]');

    containers.forEach((container) => {
      const delay = parseInt(container.dataset.revealDelay, 10) || DEFAULT_DELAY;
      const threshold = parseFloat(container.dataset.revealThreshold) || DEFAULT_THRESHOLD;
      const children = container.children;
      const isGrid = children.length > 1;

      if (prefersReduced) {
        container.classList.add('reveal-visible');
        Array.from(children).forEach((c) => c.classList.add('reveal-visible'));
        return;
      }

      if (isGrid) {
        Array.from(children).forEach((child, i) => {
          child.classList.add('reveal-item');
          child.style.transitionDelay = `${i * delay}ms`;
        });
      } else {
        container.classList.add('reveal-item');
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (isGrid) {
                Array.from(children).forEach((c) => c.classList.add('reveal-visible'));
              } else {
                container.classList.add('reveal-visible');
              }
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold }
      );

      observer.observe(container);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
