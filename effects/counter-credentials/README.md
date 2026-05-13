# Animated Number Counter

**Categoria:** Scroll-Triggered Animation | **Impacto:** ★★★★☆

Números animados que "contam" de zero até o valor final quando o elemento entra no viewport. Transforma dados estáticos em elementos dinâmicos e aumenta credibilidade percebida.

## Onde Usar
- Credential block (CRO, anos de experiência, pacientes atendidos)
- Qualquer seção de estatísticas ou métricas

## Integração

**1. Adicione o CSS** (opcional — apenas se quiser estilizar o elemento `.counter`)

**2. Adicione o JS** (copie `snippet.js` para o `<script>` do projeto, antes do `</body>`)

**3. No HTML**, adicione a classe `.counter` com os atributos de controle:
```html
<!-- Número inteiro com sufixo -->
<span class="counter" data-target="1000" data-suffix="+">0</span>

<!-- Com duração customizada -->
<span class="counter" data-target="15" data-suffix=" anos" data-duration="2200">0</span>

<!-- Sem sufixo -->
<span class="counter" data-target="27198">0</span>
```

**Atributos disponíveis:**
| Atributo | Descrição | Padrão |
|---|---|---|
| `data-target` | Número final (inteiro) | obrigatório |
| `data-suffix` | Texto após o número | `""` |
| `data-duration` | Duração em ms | `1800` |

## Notas de Acessibilidade
Se `prefers-reduced-motion: reduce` estiver ativo, o número final é exibido imediatamente sem animação.

## Compatibilidade
`IntersectionObserver` suportado em Chrome 58+, Firefox 55+, Safari 12.1+. Sem polyfill — fallback natural exibe número estático.
