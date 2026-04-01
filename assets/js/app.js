/* ============================================================
   VIBE2HERO — app.js
   Lógica global: progresso, FAQ, utilitários
   ============================================================ */

'use strict';

/* ----------------------------------------------------------
   STORAGE — persistência em localStorage com namespace
   ---------------------------------------------------------- */
const Storage = {
  key: (k) => `v2h:${k}`,
  get: (k) => {
    try { return JSON.parse(localStorage.getItem(Storage.key(k))); }
    catch { return null; }
  },
  set: (k, v) => {
    try { localStorage.setItem(Storage.key(k), JSON.stringify(v)); }
    catch { console.warn('[v2h] storage error'); }
  },
};

/* ----------------------------------------------------------
   PROGRESS — sistema de progresso por tópico
   ---------------------------------------------------------- */
const Progress = {
  _data: null,

  load() {
    this._data = Storage.get('progress') || {};
    return this;
  },

  save() {
    Storage.set('progress', this._data);
    return this;
  },

  /* Marca ou desmarca um tópico. Retorna o novo estado */
  toggle(trackId, moduleId, topicIdx) {
    const key = `${trackId}:${moduleId}:${topicIdx}`;
    this._data[key] = !this._data[key];
    this.save();
    return this._data[key];
  },

  isDone(trackId, moduleId, topicIdx) {
    return !!this._data[`${trackId}:${moduleId}:${topicIdx}`];
  },

  /* Conta tópicos feitos num módulo */
  countModule(trackId, moduleId, total) {
    let done = 0;
    for (let i = 0; i < total; i++) {
      if (this.isDone(trackId, moduleId, i)) done++;
    }
    return done;
  },

  /* Percentual global de um track */
  trackPercent(trackId, modules) {
    let done = 0, total = 0;
    modules.forEach(({ id, topics }) => {
      total += topics.length;
      done  += this.countModule(trackId, id, topics.length);
    });
    return total ? Math.round(done / total * 100) : 0;
  },
};

/* ----------------------------------------------------------
   FAQ — accordion simples
   ---------------------------------------------------------- */
function initFAQ() {
  document.querySelectorAll('.faq-item__q').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      /* Fecha todos */
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      /* Abre o clicado (se estava fechado) */
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ----------------------------------------------------------
   CHECKLIST — tópicos marcáveis numa página de módulo
   Usa data-track, data-module, data-topic nos elementos
   ---------------------------------------------------------- */
function initChecklist() {
  Progress.load();

  document.querySelectorAll('.topic-check').forEach((el) => {
    const { track, module: mod, topic } = el.dataset;
    if (track === undefined) return;

    const idx = parseInt(topic, 10);

    /* Restaura estado */
    if (Progress.isDone(track, mod, idx)) el.classList.add('checked');

    el.addEventListener('click', () => {
      const nowDone = Progress.toggle(track, mod, idx);
      el.classList.toggle('checked', nowDone);
      updateModuleProgress(track, mod);
    });
  });
}

/* Atualiza barra de progresso do módulo na página */
function updateModuleProgress(trackId, moduleId) {
  const bar   = document.getElementById('module-progress-fill');
  const label = document.getElementById('module-progress-label');
  const items = document.querySelectorAll(`.topic-check[data-track="${trackId}"][data-module="${moduleId}"]`);
  if (!bar || !items.length) return;

  const total = items.length;
  const done  = [...items].filter(el => el.classList.contains('checked')).length;
  const pct   = Math.round(done / total * 100);

  bar.style.width = pct + '%';
  if (label) label.textContent = `${done} / ${total} tópicos concluídos · ${pct}%`;
}

/* ----------------------------------------------------------
   PROGRESS BARS — inicializa todas as barras da página
   ---------------------------------------------------------- */
function initProgressBars() {
  document.querySelectorAll('[data-progress]').forEach((bar) => {
    const pct = parseInt(bar.dataset.progress, 10) || 0;
    bar.style.width = pct + '%';
  });
}

/* ----------------------------------------------------------
   SMOOTH CURSOR — cursor pisca no elemento .prompt__cursor
   (já é CSS, mas garantimos presença)
   ---------------------------------------------------------- */
function initCursor() {
  /* Só garante que o cursor exista se o prompt existir */
  document.querySelectorAll('.prompt').forEach((prompt) => {
    if (!prompt.querySelector('.prompt__cursor')) {
      const c = document.createElement('span');
      c.className = 'prompt__cursor';
      prompt.appendChild(c);
    }
  });
}

/* ----------------------------------------------------------
   BOOTSTRAP — roda tudo quando o DOM estiver pronto
   ---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  initChecklist();
  initProgressBars();
  initCursor();
});
