# MD Odontologia Digital — Angra dos Reis

Este diretório contém o projeto do site da clínica **MD Odontologia Digital**. O projeto segue uma filosofia de "Luxo por Subtração" (estilo Apple/Rolex), focando em autoridade visual, simplicidade e conversão direta.

## 🎯 Objetivo Central
Um site de uma única página que comunica com excelência:
1. **Identidade** — Quem são (equipe de 6 especialistas em Angra dos Reis).
2. **Ação** — Como agendar (via WhatsApp).
3. **Localização** — Onde ficam (Centro, Angra dos Reis).

---

## 🧭 Guia para Agentes de IA

Se você é um agente de IA trabalhando neste projeto, siga estas prioridades:

### 1. Fontes de Verdade (Obrigatório Ler)
*   **[SCOPE.md](./SCOPE.md)**: O que deve e o que NÃO deve estar no site. Se tiver dúvida se deve adicionar uma seção, a resposta está aqui.
*   **[DESIGN.md](./DESIGN.md)**: O sistema de design completo (cores espresso/creme/teal, tipografia Inter/Playfair, sombras, raios, etc). **Nunca use cores ou estilos fora deste documento.**
*   **[PROCESS.md](./PROCESS.md)**: O histórico detalhado do que já foi feito, o que falhou e como os problemas foram resolvidos. Serve como playbook para evitar erros do passado.

### 2. Arquitetura Técnica
*   **HTML/CSS Puro**: O site é construído em Vanilla HTML5 e CSS3. Não use frameworks (Tailwind, Bootstrap) nem bibliotecas externas de componentes.
*   **Mobile-First**: O CSS base é para mobile (375px). Media queries `@media (min-width: ...)` são usadas para adicionar layout desktop.
*   **Animações GPU**: Use apenas `transform`, `opacity` e `filter` para animações. Nunca anime propriedades que causem reflow (`width`, `height`, `margin`).
*   **Schema.org**: O site inclui marcação JSON-LD `Dentist` para SEO local.

### 3. Princípios de Design (Invioláveis)
*   **Luxo por Subtração**: A autoridade vem do espaço em branco e da ausência de excesso. Antes de adicionar, tente remover.
*   **Imagens Editorial**: O Hero usa fotos reais (`equipe.jpg`) com tratamento editorial via CSS.
*   **Proibido "Image Strips"**: Não interrompa seções de conteúdo com faixas de imagem full-width (ver §9.1 do `DESIGN.md`).
*   **Grids Honestos**: Galeria de Antes/Depois é um CSS Grid direto (`.ba-container`), sem interações complexas ou sliders JS bugados.

---

## 📂 Estrutura de Arquivos

```text
.
├── index.html          # O site (implementação única)
├── DESIGN.md           # Sistema de design e tokens visuais
├── SCOPE.md            # Escopo e princípios de decisão
├── PROCESS.md          # Histórico de produção e lições aprendidas
├── INFOS.md            # Dados factuais da clínica (CRO, Endereço, etc)
├── RESEARCH.md         # Pesquisa de mercado e Instagram
├── Testimonials.md     # Depoimentos brutos dos pacientes
└── assets/             # Fotos da equipe, clínica e casos (antes/depois)
```

---

## 🛠️ Workflow de Desenvolvimento

1.  **Pesquisa**: Use o Manus IA para analisar o Instagram (@mdodontologiadigital) se precisar de novos contextos narrativos.
2.  **Assets**: Imagens novas devem ser salvas em `assets/` com nomes padronizados (ex: `foto-{nome}.jpg`).
3.  **Edição**: Ao editar o `index.html`, garanta que as variáveis CSS e tokens de espaçamento do `DESIGN.md` sejam respeitados.
4.  **Validação**: Sempre teste o layout no breakpoint de 375px (mobile) e 1200px (desktop).

---

## 📋 Status Atual e Pendências
Veja o final do arquivo **[PROCESS.md](./PROCESS.md)** para a lista atualizada de próximos passos (integração de vídeos, upload para Cloudinary, etc).
