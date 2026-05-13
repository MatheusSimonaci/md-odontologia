# Design System — MD Odontologia Digital

> Fonte de verdade para todo trabalho visual neste projeto. 
> Focado na filosofia de "Luxo por Subtração" e estética Editorial.

---

## 0. Identidade Visual da Marca

### Análise da Logo
A logo da MD Odontologia Digital é uma **marca tipográfica minimalista**: as letras "MD" em serif elegante sobre fundo creme quente.

- **Fundo:** Creme quente `#F5F0E8`
- **Tipografia:** Espresso escuro `#2C1E12`
- **Atmôsfera:** Luxo discreto, premium, editorial — clínica-spa de alto padrão.

---

## 1. Visual Theme & Atmosphere

**Luxury Dental — Elegância Quente com Credibilidade Clínica**

- **Luxo discreto** — simplicidade e materiais quentes.
- **Acolhimento premium** — tons de creme e espresso evocam spa.
- **Credibilidade editorial** — tipografia serif + espaço generoso = autoridade.
- **Digital como Diferencial** — o Teal aparece apenas para sinalizar o ponto de contato digital (WhatsApp).

---

## 2. Color Palette & Roles

| Color Name | Hex Code | Functional Role |
|---|---|---|
| **Warm Cream** | `#F5F0E8` | Primary background — creme quente. |
| **Deep Espresso** | `#2C1E12` | Primary text, headers, brand typography. |
| **Warm Sand** | `#EDE8DF` | Secondary backgrounds, section alternates. |
| **Warm Stone** | `#8A7568` | Secondary text, captions, metadata. |
| **Clinical Teal** | `#0096A0` | Digital accent — ONLY for primary WhatsApp CTAs. |
| **Warm Divider** | `#DDD6CA` | Borders and separators. |

### Hierarquia de Uso
1. **Backgrounds:** Warm Cream ↔ Warm Sand.
2. **Texto:** Deep Espresso (primário) / Warm Stone (secundário).
3. **Ação Digital:** Clinical Teal (reservado para o ponto de conversão).
4. **Bordas de Componentes:** Warm Stone ou Deep Espresso (unificado).

---

## 3. Typography Rules

**Font Family Primary:** Inter (neutral, legível, confiável).
**Font Family Accent:** Playfair Display (headlines principais e marca tipográfica "MD").

**Usos da Playfair Display:**
- Marca "MD" na navegação e footer.
- Headline principal do hero (`h1`).
- Nomes dos médicos no Schema.org e créditos discretos.

---

## 4. Component Stylings

### Marca Tipográfica (Logo Mark)
```css
.logo-mark {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--deep-charcoal);
  background: var(--soft-gray);
  border: 1px solid var(--divider);
  border-radius: 8px;
  width: 38px; height: 38px;
}
```

### Buttons
- **Primary CTA ("Agendar"):** Clinical Teal background.
- **Secondary Action:** Borda + texto Deep Espresso ou Warm Stone.

### Cards & Containers (Unified Luxury)
- **Service Cards:** Borda lateral ou contorno sutil em **Warm Stone** ou **Deep Espresso**. 
- **Proibido:** Uso de múltiplas cores (Teal/Copper/Sage) em cards. A estética deve ser sóbria e unificada.
- **Shadows:** `0 4px 12px rgba(44,30,18,0.07)` — espresso claro.

---

## 5. Layout Principles

### Subtração como Princípio de Luxo
Cada iteração começa removendo, não adicionando. O espaço em branco é o que comunica autoridade.

### Escala de Espaçamento (tokens CSS)
```css
--space-md:  24px;
--space-lg:  48px;
--space-xl:  96px;  /* Padding padrão entre seções desktop */
--space-2xl: 120px; /* Padding para seções de alta autoridade */
```

---

## 6. Apresentação da Equipe (Filosofia Rolex/Apple)

**Decisão de produto:** A equipe é apresentada exclusivamente no hero, como retrato coletivo editorial. 
- `equipe.jpg` recebe overlay espresso à esquerda, vinheta sutil e CSS filter (saturate/contrast/sepia) para coerência cromática.
- Não criar seções de perfis individuais ou avatares.

---

## 7. Notas de Implementação Específicas

1. **Não usar logo em imagem** — representar "MD" com texto CSS Playfair Display.
2. **Teal restrito** — sinaliza "conversão digital", não é cor decorativa.
3. **Espresso nos shadows** — usar `rgba(44,30,18,...)` para calor cromático.
4. **Proibido Image Strips** — não fragmentar fluxo visual com faixas de fotos entre cards.
5. **Prova Social unificada** — seções de depoimentos e resultados (Antes/Depois) devem seguir o grid sóbrio do projeto, sem sliders ou excesso de cores.

---

## Arquivos Relacionados
| Arquivo | Descrição |
|---|---|
| `index.html` | Site — implementação deste design |
| `PROCESS.md` | Playbook de essência |
