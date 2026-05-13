# Aurora Hero Background

**Categoria:** Background Animation | **Impacto:** ★★★★★

Gradiente animado com movimento orgânico de blobs de cor — efeito "aurora boreal" usando as cores do design system. Cria profundidade e movimento sem agressividade. É o principal elemento WOW do repositório — impacto imediato acima da dobra.

## Onde Usar
- Hero section (fundo da seção ou card do médico)
- CTA box final (sobre gradiente existente)
- Qualquer elemento de destaque com fundo escuro/colorido

## Variáveis CSS Usadas
```
--teal: #0096A0
--deep-teal: #007080
--sage: #5BA08A
```

## Integração

**1. Adicione o CSS** (copie `snippet.css` para o `<style>` do projeto)

**2. No HTML**, adicione `.aurora-bg` ao container e um filho `.aurora-blob`:
```html
<div class="hero-card-img aurora-bg">
  <div class="aurora-blob"></div>
  <!-- conteúdo existente aqui (svg, imagem, etc.) -->
</div>
```

**3.** O container deve ter `position: relative` e `overflow: hidden` — já é o padrão nos projetos deste repo.

## Notas de Acessibilidade
Animações são envolvidas em `@media (prefers-reduced-motion: no-preference)`. Em modo reduced-motion, os gradientes ficam estáticos mas ainda visualmente presentes.

## Compatibilidade
Chrome 90+, Firefox 89+, Safari 14+, Edge 90+. Fallback estático em browsers antigos.
