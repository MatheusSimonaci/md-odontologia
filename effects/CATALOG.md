# Effects Catalog — Dental Websites

Biblioteca de efeitos visuais reutilizáveis para projetos de clínicas odontológicas. Todos os efeitos seguem o sistema de design definido em `/DESIGN.md`.

## Critérios de Aprovação

Todo efeito aprovado neste catálogo atende:
- **Performance:** Apenas `transform`, `opacity`, `filter` animados (GPU-acelerado)
- **Acessibilidade:** Suporte a `prefers-reduced-motion`
- **Mobile:** Testado em 375px sem travamento
- **Tom:** Transmite saúde, tecnologia e confiança — nunca exibicionismo
- **Autonomia:** Vanilla CSS + JS, sem dependências externas

---

## Efeitos Disponíveis

| ID | Nome | Impacto | Onde Usar | Técnica | Status |
|---|---|---|---|---|---|
| `aurora-hero` | Aurora Hero Background | ★★★★★ | Hero section, card destaque | CSS @keyframes + radial-gradient | ✅ Aprovado |
| `counter-credentials` | Animated Number Counter | ★★★★☆ | Credential block, stats | IntersectionObserver + rAF | ✅ Aprovado |
| `scroll-reveal-stagger` | Scroll Reveal Stagger | ★★★★☆ | Grids de cards, qualquer lista | IntersectionObserver + CSS classes | ✅ Aprovado |
| `before-after-slider` | Before/After Image Slider | ★★★★★ | Galeria de resultados | CSS clip-path + drag events | ✅ Aprovado |
| `nav-blur-scroll` | Nav Blur on Scroll | ★★★☆☆ | Navigation bar | scroll event + backdrop-filter | ✅ Aprovado |

---

## Como Usar

Cada efeito tem sua própria pasta com:
- `README.md` — documentação completa e instruções de integração
- `demo.html` — página standalone para visualizar o efeito em isolamento
- `snippet.css` — CSS pronto para copiar
- `snippet.js` — JavaScript (quando necessário)

### Fluxo de Integração

1. Abrir `demo.html` do efeito desejado para visualizar
2. Copiar o conteúdo de `snippet.css` para o `<style>` do projeto
3. Copiar o conteúdo de `snippet.js` para o `<script>` do projeto (se existir)
4. Adicionar as classes/atributos HTML conforme o README do efeito
5. Testar com `prefers-reduced-motion: reduce` nas DevTools

---

## Variáveis CSS do Design System

Os efeitos utilizam estas variáveis — defina-as no `:root` do projeto:

```css
:root {
  --warm-white:    #FAFAF8;
  --deep-charcoal: #1A1A2E;
  --soft-gray:     #F4F4F2;
  --muted-stone:   #7A7A72;
  --teal:          #0096A0;
  --deep-teal:     #007080;
  --sage:          #5BA08A;
  --copper:        #C9956C;
  --divider:       #E4E4E0;
}
```
