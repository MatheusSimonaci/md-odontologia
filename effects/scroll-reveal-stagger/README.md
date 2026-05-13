# Scroll Reveal Stagger

**Categoria:** Scroll-Triggered Animation | **Impacto:** ★★★★☆

Cards entram na tela com fade-in + translateY suave em sequência (stagger) quando o container entra no viewport. Transforma o scroll em uma experiência narrativa — o usuário "descobre" o conteúdo progressivamente.

## Onde Usar
- Grid de serviços (6 cards em sequência)
- Grid de depoimentos
- Seção de equipe
- Qualquer lista ou grid de elementos

## Integração

**1. Adicione o CSS** (copie `snippet.css` para o `<style>` do projeto)

**2. Adicione o JS** (copie `snippet.js` para o `<script>` do projeto, antes do `</body>`)

**3. No HTML**, adicione `data-reveal` ao container:
```html
<!-- Grid de cards — filhos recebem stagger automático -->
<div class="services-grid" data-reveal>
  <div class="service-card">...</div>
  <div class="service-card">...</div>
  <div class="service-card">...</div>
</div>

<!-- Elemento único -->
<div class="section-header" data-reveal>...</div>

<!-- Com delay customizado entre itens (ms) -->
<div class="testimonials-grid" data-reveal data-reveal-delay="150">
  ...
</div>
```

**Atributos disponíveis:**
| Atributo | Descrição | Padrão |
|---|---|---|
| `data-reveal` | Ativa o efeito no container | obrigatório |
| `data-reveal-delay` | Delay em ms entre cada filho | `100` |
| `data-reveal-threshold` | % visível para disparar (0-1) | `0.15` |

## Notas de Acessibilidade
Com `prefers-reduced-motion: reduce`, todos os itens ficam imediatamente visíveis sem animação.

## Compatibilidade
`IntersectionObserver` suportado em Chrome 58+, Firefox 55+, Safari 12.1+.
