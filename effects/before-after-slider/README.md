# Before/After Image Slider

**Categoria:** Interactive Component | **Impacto:** ★★★★★

Slider interativo que revela a imagem "depois" arrastando uma divisória central sobre a imagem "antes". Suporte a mouse e touch. É o efeito mais poderoso para clínicas odontológicas — demonstra resultados de forma visceral.

## Onde Usar
- Seção de galeria de resultados (antes/depois de implantes, clareamento, ortodontia)
- Qualquer comparação visual de tratamento

## Integração

**1. Adicione o CSS** (copie `snippet.css` para o `<style>` do projeto)

**2. Adicione o JS** (copie `snippet.js` para o `<script>` do projeto, antes do `</body>`)

**3. No HTML**, monte a estrutura:
```html
<div class="ba-slider">
  <div class="ba-before">
    <img src="foto-antes.jpg" alt="Antes do tratamento" />
    <span class="ba-label">Antes</span>
  </div>
  <div class="ba-after">
    <img src="foto-depois.jpg" alt="Depois do tratamento" />
    <span class="ba-label">Depois</span>
  </div>
  <div class="ba-handle">
    <div class="ba-handle-line"></div>
    <div class="ba-handle-btn">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.59 16.59L4 12l4.59-4.59L10 8.83 6.83 12 10 15.17zm6.82 0L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17z"/>
      </svg>
    </div>
    <div class="ba-handle-line"></div>
  </div>
</div>
```

**Importante:** As duas imagens (`ba-before` e `ba-after`) devem ter as mesmas dimensões para o alinhamento funcionar corretamente.

## Observação para V2
Este efeito fica bloqueado até que fotos reais de pacientes (com consentimento) estejam disponíveis. Use o relatório Manus (`RESEARCH.md`) para identificar se a clínica já possui imagens de antes/depois publicadas.

## Notas de Acessibilidade
A transição do `clip-path` é desativada com `prefers-reduced-motion: reduce` — o slider continua funcional, apenas sem animação suave.

## Compatibilidade
`clip-path` suportado em Chrome 55+, Firefox 54+, Safari 9.1+, Edge 79+.
