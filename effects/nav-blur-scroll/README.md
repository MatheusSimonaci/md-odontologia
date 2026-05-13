# Nav Blur on Scroll

**Categoria:** Scroll-Triggered Style | **Impacto:** ★★★☆☆

Ao rolar a página, a navigation bar ganha `backdrop-filter: blur(12px)` + fundo semi-transparente, criando efeito glassmorphism. Sutil mas refinado — diferencia imediatamente um site premium de um genérico.

## Onde Usar
- Navigation bar sticky em qualquer projeto

## Integração

**1. Adicione o CSS** (copie `snippet.css` para o `<style>` do projeto)

**2. Adicione o JS** (bloco mínimo — pode ser inline no HTML):
```html
<script>
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-scrolled', window.scrollY > 24);
  }, { passive: true });
</script>
```

**3.** Certifique-se que o `<nav>` já tem `background: var(--warm-white)` no estado padrão — o efeito é uma transição suave a partir desse baseline.

## Variáveis CSS Usadas
```
--warm-white: #FAFAF8
--divider: #E4E4E0
```

## Notas de Acessibilidade
Este efeito não tem animação de movimento — é apenas mudança de opacidade e blur. Compatível com `prefers-reduced-motion` sem ajustes.

## Compatibilidade
`backdrop-filter` suportado em Chrome 76+, Safari 9+, Edge 79+. Firefox requer flag `layout.css.backdrop-filter.enabled` (Firefox 103+ ativo por padrão). Fallback: fundo sólido opaco (ainda funcional).
