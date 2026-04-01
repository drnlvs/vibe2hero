```
 __   _____ _                ____  _
 \ \ / /_ _| |__   ___     |___ \| |__   ___ _ __ ___
  \ V / | || '_ \ / _ \      __) | '_ \ / _ \ '__/ _ \
   | |  | || |_) |  __/     / __/| | | |  __/ | | (_) |
   |_| |___|_.__/ \___|    |_____|_| |_|\___|_|  \___/

  aprenda do zero. vibe. torne-se dev.
  vibe2hero.dev.br
```

<div align="center">

[![Status](https://img.shields.io/badge/status-em%20construção-ff8c00?style=flat-square&labelColor=0a0a0a)](https://vibe2hero.dev.br)
[![Track atual](https://img.shields.io/badge/track%20atual-node.js-ff8c00?style=flat-square&labelColor=0a0a0a&logo=nodedotjs&logoColor=ff8c00)](https://vibe2hero.dev.br/tracks/nodejs)
[![Licença](https://img.shields.io/badge/licença-MIT-ff8c00?style=flat-square&labelColor=0a0a0a)](LICENSE)
[![Gratuito](https://img.shields.io/badge/custo-$0.00-ff8c00?style=flat-square&labelColor=0a0a0a)](https://vibe2hero.dev.br)
[![Open Source](https://img.shields.io/badge/open%20source-sim-ff8c00?style=flat-square&labelColor=0a0a0a)](https://github.com/drnlvs/vibe2hero)

</div>

---

## A história por trás disso

Sou analista de dados numa indústria de transformadores eletroeletrônicos.
SQL é meu pão de cada dia. Python entra com frequência. Power BI, TOTVS Protheus,
otimização de queries, índices, purga de dados — esse é o meu mundo.

Mas tem uma fronteira que sempre me incomodou: **backend web**.

Node.js. APIs REST. Autenticação. ORM. Deploy. Toda vez que eu tentava aprender
por conta, esbarrava no mesmo problema: os cursos são longos demais, genéricos demais,
ou assumem que você tem tempo infinito e paciência infinita para tutoriais que ensinam
`console.log("hello world")` por quarenta minutos.

Então decidi fazer diferente.

Em vez de consumir um curso pronto, resolvi **gerar um** — ao vivo, com IA, documentando
cada passo, cada dúvida, cada exercício. E publicar tudo de graça para quem vier depois.

Esse repositório é o resultado disso.

---

## O que é o vibe2hero

Uma plataforma de aprendizado open source onde **o curso é gerado pela jornada real de um aluno**.

Não existe roteiro pré-escrito. Não existe estúdio de gravação. Existe um analista de dados
que quer aprender a desenvolver, uma IA que atua como professor sênior, e um processo
documentado em público — falhas incluídas.

Cada módulo nasce de uma sessão de estudo real:

```
aluno estuda → tira dúvidas → IA gera o conteúdo →
conteúdo vira uma aula no site → próximo módulo
```

As dúvidas reais viram FAQ. Os erros reais viram exemplos. A progressão real
vira o roadmap de qualquer pessoa que queira fazer o mesmo caminho.

---

## Por que Pareto muda tudo

O Princípio de Pareto diz que 80% dos resultados vêm de 20% dos esforços.
Aplicado ao aprendizado de programação, significa uma coisa:

> **Você não precisa saber tudo. Você precisa saber o que importa primeiro.**

A maioria dos cursos trata cada tópico com peso igual. Aqui não.

Cada módulo começa com um bloco explícito:

```
// pareto — foco aqui
Os 20% que importam neste módulo: event loop mental model +
async/await + Promises. O resto é contexto — vem depois.
```

Esse filtro muda a velocidade de aprendizado completamente.
Você sai de cada módulo capaz de **fazer algo real** — não de ter assistido algo real.

Mas o Pareto aqui vai além de uma técnica de estudo.

Ele é o princípio que usamos para **estruturar o próprio curso**. Cada módulo
é destilado para conter apenas o essencial. Cada exercício é calibrado para
treinar exatamente a habilidade que mais importa naquele ponto da jornada.
O resultado é um curso que qualquer pessoa pode usar — não só quem tem
horas livres por dia.

---

## Como o conteúdo é gerado

O processo é transparente por design. Aqui está exatamente o que acontece:

```
┌─────────────────────────────────────────────────────────┐
│                    CLAUDE.AI (chat)                     │
│                                                         │
│  professor sênior + arquiteto + gerador de prompts      │
│  → ensina teoria com analogias do mundo real            │
│  → gera exemplos de código comentados                   │
│  → cria exercícios com enunciados claros                │
│  → revisa o código do aluno linha por linha             │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                      ALUNO                              │
│                                                         │
│  executor + aprovador + praticante                      │
│  → estuda o conteúdo entregue                           │
│  → escreve os exercícios do zero                        │
│  → traz dúvidas de volta para o chat                    │
│  → aprova antes de qualquer mudança no site             │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                  CLAUDE CODE (VSCode)                   │
│                                                         │
│  executor técnico do site                               │
│  → cria os arquivos HTML de cada módulo                 │
│  → segue o CLAUDE.md religiosamente                     │
│  → faz commits e push para o GitHub                     │
│  → nunca age sem aprovação em mudanças críticas         │
└─────────────────────────────────────────────────────────┘
```

O `CLAUDE.md` na raiz deste repositório é público e documenta todas as
regras que o Claude Code segue — estrutura de pastas, componentes CSS,
como adicionar módulos, o que requer aprovação antes de executar.

Isso não é "IA gerando conteúdo aleatório". É um aluno real, com dúvidas reais,
sendo ensinado por uma IA e documentando tudo em público.

---

## Estrutura do projeto

```
vibe2hero/
├── index.html                    ← hub de todas as tracks
├── assets/
│   ├── css/global.css            ← design system completo
│   └── js/app.js                 ← lógica de progresso (localStorage → Supabase)
├── tracks/
│   ├── nodejs/                   ← track ativa ✓
│   │   ├── index.html            ← dashboard com 16 módulos
│   │   └── modulos/
│   │       ├── m01-intro/        ← teoria + exemplo + exercício
│   │       ├── m02-npm/
│   │       └── ...               ← um módulo por aula
│   ├── python/                   ← em breve
│   ├── typescript/               ← em breve
│   └── ...
└── faq/                          ← dúvidas reais → respostas permanentes
```

**Stack intencional:** HTML + CSS + Vanilla JS. Sem framework, sem build step,
sem abstração. O projeto é didático — a complexidade cresce junto com o aluno.

---

## Track Node.js — em andamento

16 módulos seguindo o roadmap oficial do [roadmap.sh/nodejs](https://roadmap.sh/nodejs),
filtrados pelo princípio de Pareto:

| # | Módulo | Nível | Status |
|---|--------|-------|--------|
| M01 | Introdução ao Node.js | Iniciante | ✅ disponível |
| M02 | npm & Pacotes | Iniciante | 🔄 em breve |
| M03 | Async Programming | Iniciante | 🔄 em breve |
| M04 | Error Handling | Iniciante | 🔄 em breve |
| M05 | Módulos Built-in | Iniciante | 🔄 em breve |
| M06 | Working with Files | Intermediário | 🔄 em breve |
| M07 | CLI Apps | Intermediário | 🔄 em breve |
| M08 | Building APIs — Express | Iniciante | 🔄 em breve |
| M09 | HTTP Calls | Intermediário | 🔄 em breve |
| M10 | Autenticação (JWT) | Intermediário | 🔄 em breve |
| M11 | Banco de Dados (Prisma) | Intermediário | 🔄 em breve |
| M12 | Testing (Vitest + TDD) | Intermediário | 🔄 em breve |
| M13 | Keep App Running (pm2) | Intermediário | 🔄 em breve |
| M14 | Streams | Avançado | 🔄 em breve |
| M15 | Threads & Cluster | Avançado | 🔄 em breve |
| M16 | Debugging & Performance | Avançado | 🔄 em breve |

---

## O que vem a seguir

Node.js é só o começo. O vibe2hero foi construído para ser amplo desde o primeiro dia —
cada nova track segue a mesma estrutura, o mesmo processo, o mesmo princípio.

```
                        vibe2hero
                            │
        ┌───────────────────┼────────────────────┐
        │                   │                    │
    ⬡ node.js          🐍 python           Ts typescript
    (ativo)            (planejado)          (planejado)
                            │
        ┌───────────────────┼────────────────────┐
        │                   │                    │
    ⊞ sql avançado     ∞ devops            + você sugere
    (planejado)        (planejado)         (issue no GitHub)
```

Cada track nasce quando o aluno chega até ela.
O roadmap não é pré-fabricado — ele é construído pela jornada.

---

## Como usar este curso

**Se você quer aprender:**

1. Acesse [vibe2hero.dev.br](https://vibe2hero.dev.br)
2. Escolha a track Node.js
3. Comece pelo M01 — o progresso é salvo no seu browser
4. Se travar em algum exercício, abre uma [issue](https://github.com/drnlvs/vibe2hero/issues) com a dúvida

**Se você quer contribuir:**

```bash
git clone https://github.com/drnlvs/vibe2hero.git
cd vibe2hero
# Abra index.html direto no browser — sem servidor necessário
```

Leia o [`CLAUDE.md`](CLAUDE.md) — ele explica exatamente como a estrutura funciona,
como adicionar módulos, como adicionar tracks, e as regras do projeto.

**Tipos de contribuição bem-vindos:**
- Correção de erro técnico ou conceitual em uma aula
- Exercício alternativo para um módulo existente
- Tradução de módulo para outro idioma
- Sugestão de nova track via issue

---

## Filosofia do projeto

Três princípios que guiam cada decisão aqui:

**1. Transparência total**
O processo é público. Os prompts usados para gerar o conteúdo estão
documentados. As dúvidas do aluno viram FAQ permanente. Nada é escondido.

**2. Pareto sobre completude**
Preferimos um módulo que ensina 5 conceitos essenciais muito bem
a um módulo que cobre 20 conceitos superficialmente.
Você aprende menos tópicos, mas aprende de verdade.

**3. Aprendizado ativo**
Cada módulo termina com um exercício que você escreve do zero.
Não existe "assistir e achar que aprendeu". A mão vai para o teclado.

---

## Deploy & Infraestrutura

```
GitHub (código) → Hostinger VPS → Nginx → vibe2hero.dev.br
                                        └→ SSL via Certbot (Let's Encrypt)
```

Deploy manual: `git pull` no servidor após cada push.
Sem CI/CD, sem Docker, sem build — arquivos estáticos servidos diretamente.
A complexidade de infra cresce junto com o projeto.

---

## Licença

MIT — use, fork, modifique, redistribua.
Se este projeto te ajudou a aprender alguma coisa, uma ⭐ no repositório
já é contribuição suficiente.

---

<div align="center">

```
$ node --version
v22.x.x (LTS 2026)

$ echo "pronto para começar"
pronto para começar

$ _
```

**[→ acessar vibe2hero.dev.br](https://vibe2hero.dev.br)**

*feito por humano + IA · open source · gratuito · em construção permanente*

</div>
