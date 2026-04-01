# Project: vibe2hero

Plataforma de aprendizado open source, gratuita, gerada ao vivo com IA.
Trilhas de programação do zero, com princípio de Pareto aplicado.

**Site:** vibe2hero.dev.br
**Repositório:** https://github.com/seuusuario/vibe2hero

---

## Stack

- **Frontend:** HTML5 + CSS3 + Vanilla JS (sem frameworks — intencional)
- **Fonte:** JetBrains Mono (Google Fonts)
- **Progresso:** localStorage (Fase 1) → Supabase Auth + DB (Fase 2, futuro)
- **Deploy:** Nginx no Hostinger VPS, servindo arquivos estáticos
- **Versionamento:** Git + GitHub (público, open source)
- **Sem build step:** nenhum bundler, nenhum transpiler — arquivos servidos diretamente

> **Por que sem framework?** O projeto é didático. O aluno aprende Node.js aqui
> enquanto o site é construído em HTML puro — sem magia de framework no caminho.
> A complexidade aumenta deliberadamente conforme o curso avança.

---

## Estrutura do Projeto

```
vibe2hero/
├── CLAUDE.md                        → este arquivo
├── README.md                        → documentação pública do projeto
├── index.html                       → home — hub de todas as tracks
│
├── assets/
│   ├── css/
│   │   └── global.css               → design system completo (única fonte de verdade CSS)
│   └── js/
│       └── app.js                   → lógica global (progresso, FAQ accordion, checklist)
│
├── tracks/
│   ├── nodejs/
│   │   ├── index.html               → dashboard da track Node.js (lista de módulos)
│   │   └── modulos/
│   │       ├── m01-intro/
│   │       │   └── index.html       → aula completa: teoria + exemplo + exercício
│   │       ├── m02-npm/
│   │       │   └── index.html
│   │       └── ...                  → um módulo por pasta, adicionados aula a aula
│   │
│   ├── python/                      → track futura (estrutura idêntica ao nodejs/)
│   ├── typescript/                  → track futura
│   └── ...
│
└── faq/
    └── index.html                   → FAQ vivo, gerado pelas dúvidas reais do aluno
```

---

## Design System — Regras Absolutas

O `assets/css/global.css` é a **única fonte de verdade** para estilos.
Nunca escreva CSS inline ou em `<style>` dentro dos arquivos HTML, exceto para
estilos de layout exclusivos de uma página específica (ex: grid da home).

### Variáveis obrigatórias — sempre use, nunca hardcode

```css
/* Cores — nunca use hex diretamente no HTML */
var(--orange)          /* #ff8c00 — cor primária */
var(--orange-dim)      /* #cc7000 — hover states */
var(--orange-glow)     /* rgba(255,140,0,0.12) — backgrounds suaves */
var(--orange-border)   /* rgba(255,140,0,0.25) — bordas laranja */

var(--bg-base)         /* #0a0a0a — fundo principal */
var(--bg-surface)      /* #111111 — superfícies (sidebar, cards) */
var(--bg-elevated)     /* #181818 — elementos elevados */

var(--text-primary)    /* #e8e8e8 */
var(--text-secondary)  /* #888888 */
var(--text-muted)      /* #444444 */

var(--border-subtle)   /* #1e1e1e */
var(--border-mid)      /* #2a2a2a */
var(--font-mono)       /* 'JetBrains Mono', monospace */
```

### Componentes disponíveis — use antes de criar novos

| Classe CSS | Uso |
|---|---|
| `.terminal` + `.terminal__bar` + `.terminal__body` | Janela de terminal |
| `.prompt` + `.prompt__dir` + `.prompt__sym` + `.prompt__cmd` | Linha de prompt CLI |
| `.badge--begin` / `--inter` / `--adv` | Nível do módulo |
| `.badge--track` / `--soon` | Status da track |
| `.progress` + `.progress__track` + `.progress__fill` | Barra de progresso |
| `.card` + `.card--active` + `.card--done` | Cards genéricos |
| `.callout--teoria` / `--exemplo` / `--exercicio` / `--pareto` | Blocos de aula |
| `.btn--primary` / `--ghost` / `--orange-ghost` | Botões |
| `.topic-check` | Checkbox de tópico (integrado com app.js) |
| `.faq-item` + `.faq-item__q` + `.faq-item__a` | FAQ accordion |
| `.section-divider` | Divisor de seção com label |

---

## Adicionando um Novo Módulo

### Passo 1 — Criar a pasta e o arquivo

```bash
mkdir -p tracks/nodejs/modulos/m02-npm
touch tracks/nodejs/modulos/m02-npm/index.html
```

### Passo 2 — Estrutura obrigatória do HTML da aula

Todo `index.html` de módulo deve seguir exatamente esta estrutura de seções:

```
1. HEADER DA AULA
   - breadcrumb (track → módulo)
   - prompt CLI animado
   - título h1 + descrição

2. PARETO BOX (.callout--pareto)
   - os 20% que importam neste módulo

3. SEÇÃO TEORIA (.callout--teoria)
   - conceito essencial, ~5 min de leitura
   - sem enrolação, sem redundância

4. SEÇÃO EXEMPLO REAL (.callout--exemplo)
   - código funcional comentado
   - bloco .code-block com filename e linguagem
   - situação do mundo real

5. SEÇÃO EXERCÍCIO (.callout--exercicio + .exercise-box)
   - enunciado claro em passos numerados
   - desafio opcional marcado como tal
   - instrução para colar no chat para revisão

6. NAV BOTTOM
   - link "← módulo anterior" (se não for o primeiro)
   - link "próximo módulo →"
```

### Passo 3 — Registrar no dashboard da track

Em `tracks/nodejs/index.html`, adicionar o módulo no array `MODULES` do script:

```javascript
{ id:'m02', num:'M02', name:'npm & pacotes', level:'begin',
  desc:'package.json, install, scripts, semantic versioning.',
  weeks:'semana 1–2', topics:5,
  href:'modulos/m02-npm/index.html' },
```

### Passo 4 — Atualizar checklist na sidebar da aula

Cada tópico do módulo precisa de um `.topic-check` com os atributos corretos:

```html
<div class="topic-check" data-track="nodejs" data-module="m02" data-topic="0">
  <div class="topic-check__box"></div>
  <span>descrição do tópico</span>
</div>
```

> `data-topic` é zero-indexed (0, 1, 2...) e deve bater com o `topics: 5` no array MODULES.

---

## Adicionando uma Nova Track

### Passo 1 — Criar estrutura

```bash
mkdir -p tracks/python/modulos
cp tracks/nodejs/index.html tracks/python/index.html
```

### Passo 2 — Adaptar o dashboard

Em `tracks/python/index.html`, alterar:
- O array `MODULES` com os módulos da nova track
- O `data-track` de `"nodejs"` para `"python"` em todas as referências
- O título e descrição da track

### Passo 3 — Registrar na home

Em `index.html`, ativar o card da track (remover `track-card--soon` e `pointer-events:none`),
atualizar o `href` para `tracks/python/index.html`.

### Passo 4 — Atualizar o array de tracks em `app.js` se necessário

---

## Regras de JavaScript — app.js

- `app.js` é o **único arquivo JS global** — não criar outros globais
- Toda lógica de progresso passa pelo objeto `Progress` — nunca acessar `localStorage` diretamente
- A chave do localStorage é sempre `v2h:progress` — nunca mudar sem migration
- `initChecklist()` é chamado automaticamente no `DOMContentLoaded` — não chamar manualmente
- Ao adicionar nova track, garantir que `data-track` seja único e consistente em todos os módulos

### Assinatura do Progress API

```javascript
Progress.load()                              // carrega do localStorage
Progress.toggle(trackId, moduleId, topicIdx) // marca/desmarca tópico
Progress.isDone(trackId, moduleId, topicIdx) // boolean
Progress.countModule(trackId, moduleId, total) // int — tópicos feitos
Progress.trackPercent(trackId, modules)      // 0-100
```

---

## Caminhos Relativos — Regra Crítica

O site é estático sem servidor de desenvolvimento. Os caminhos relativos devem estar corretos
ou os assets não carregam. Siga sempre:

| Arquivo | Caminho para global.css | Caminho para app.js |
|---|---|---|
| `index.html` (raiz) | `assets/css/global.css` | `assets/js/app.js` |
| `tracks/nodejs/index.html` | `../../assets/css/global.css` | `../../assets/js/app.js` |
| `tracks/nodejs/modulos/m01-intro/index.html` | `../../../../assets/css/global.css` | `../../../../assets/js/app.js` |
| `faq/index.html` | `../assets/css/global.css` | `../assets/js/app.js` |

> Antes de commitar qualquer arquivo novo, verificar se os caminhos batem com a profundidade
> da pasta. Um caminho errado quebra silenciosamente (sem erro no terminal).

---

## Padrão de Commits

```
feat: add aula m02-npm completa
feat: add track python — dashboard e estrutura
fix: corrigir caminho relativo em m03-async
style: atualizar paleta de cores no design system
docs: atualizar README com instrucoes de deploy
refactor: extrair logica de progresso para Progress API
```

- Mensagens em português, imperativo (`adicionar`, `corrigir`, `atualizar`)
- Nunca adicionar `Co-Authored-By: Claude` nos commits
- Nunca commitar segredos — o projeto não tem `.env` na Fase 1, mas quando houver: `.gitignore` obrigatório

---

## O que o Claude Code Pode Fazer Sem Aprovação

- Criar novos arquivos de módulo seguindo o template obrigatório
- Adicionar módulos ao array `MODULES` nos dashboards
- Corrigir caminhos relativos de assets
- Atualizar links de navegação entre módulos (anterior/próximo)
- Corrigir erros de HTML/CSS que não alterem o design system

## O que Requer Aprovação Antes de Executar

- Qualquer alteração em `assets/css/global.css` (impacta todas as páginas)
- Qualquer alteração em `assets/js/app.js` (impacta toda a lógica de progresso)
- Alteração na estrutura de pastas do projeto
- Adição de nova dependência externa (CDN, fonte, biblioteca)
- Qualquer alteração em `index.html` da raiz
- Implementação de nova fase (ex: Fase 2 — Supabase Auth)

---

## Fases do Projeto

### Fase 1 — Atual
Site estático, localStorage, sem auth, sem backend.
Foco: conteúdo das aulas e experiência de aprendizado.

### Fase 2 — Planejada (após M08 — APIs com Express)
- Supabase Auth com GitHub OAuth
- Tabela `user_progress` no Supabase
- `app.js` passa a sincronizar com Supabase quando logado,
  localStorage como fallback quando não logado
- Nenhuma mudança estrutural nos HTMLs das aulas

### Fase 3 — Futuro
- Novas tracks (Python, TypeScript, SQL Avançado, DevOps)
- FAQ dinâmico gerado das dúvidas reais
- Leaderboard público de progresso (opt-in)

---

## Deploy — Hostinger VPS

```bash
# Clonar no servidor (primeira vez)
git clone https://github.com/seuusuario/vibe2hero.git /var/www/vibe2hero

# Atualizar após push (deploy)
cd /var/www/vibe2hero && git pull

# Nginx — bloco de configuração
server {
    listen 80;
    server_name vibe2hero.dev.br www.vibe2hero.dev.br;
    root /var/www/vibe2hero;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}

# SSL
certbot --nginx -d vibe2hero.dev.br -d www.vibe2hero.dev.br
```

> Deploy = `git push`. O servidor faz `git pull` manualmente ou via webhook.
> Não há build step, não há CI/CD obrigatório na Fase 1.

---

## Atualizando o Contexto

Ao final de cada sessão de trabalho no site (quando o usuário pedir
"atualizar contexto" ou "update context"), reescrever as seções
**O que foi feito** e **Próximos passos** neste CLAUDE.md,
preservando todas as regras acima intactas.

---

## O que foi feito

- [x] Estrutura inicial do projeto criada
- [x] Design system completo (`global.css`) — paleta laranja/preto, JetBrains Mono
- [x] `app.js` com Progress API (localStorage), FAQ accordion, checklist
- [x] `index.html` — home com hub de tracks e terminal animado
- [x] `tracks/nodejs/index.html` — dashboard com 16 módulos e progresso
- [x] `tracks/nodejs/modulos/m01-intro/index.html` — primeira aula completa
- [x] `README.md` com instruções de deploy

## Próximos Passos

- [ ] Registrar domínio `vibe2hero.dev.br` e apontar para o VPS
- [ ] Criar repositório no GitHub e fazer primeiro commit
- [ ] Configurar Nginx no Hostinger para servir o site
- [ ] Estudar M01 (aula já no site) e fazer exercício
- [ ] Gerar `tracks/nodejs/modulos/m02-npm/index.html` após M01 concluído
- [ ] Criar `faq/index.html` com primeiras dúvidas do M01
