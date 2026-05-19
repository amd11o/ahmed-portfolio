const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const ui = {
  mouse: { x: innerWidth / 2, y: innerHeight / 2 },
  ring: { x: innerWidth / 2, y: innerHeight / 2 },
  trail: [],
  commandHistory: [],
  historyIndex: -1,
  certFilter: 'All',
  awardFilter: 'All',
  writeupFolder: 'root'
};

function escapeHtml(str = '') {
  return String(str).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}

function initBoot() {
  const bar = $('#bootProgress');
  const screen = $('#bootScreen');
  requestAnimationFrame(() => (bar.style.width = '100%'));
  setTimeout(() => screen.classList.add('hide'), 1500);
}

function clock() {
  const now = new Date();
  $('#railClock').textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}

function initVisitorCounter() {
  const key = 'ahmedPortfolioVisitorCounterV7';
  const seenKey = 'ahmedPortfolioVisitorSeenV7';
  const base = 1247;
  let count = Number(localStorage.getItem(key) || base);
  if (!sessionStorage.getItem(seenKey)) {
    count += 1;
    localStorage.setItem(key, String(count));
    sessionStorage.setItem(seenKey, '1');
  }
  const display = count.toLocaleString();
  const rail = $('#railVisitorCount');
  if (rail) rail.textContent = display;
  const strip = $('#visitorStrip');
  if (strip) {
    strip.innerHTML = `
      <span><b>${display}</b><small>Portfolio visits</small></span>
      <span><b>${portfolioData.certifications.length}</b><small>Credentials</small></span>
      <span><b>${portfolioData.awards.length}</b><small>Awards & achievements</small></span>
      <span><b>${portfolioData.writeupLibrary.files.filter(f => f.status !== 'Planned').length}</b><small>Notebook files</small></span>
    `;
  }
}


function hydrateProfile() {
  const p = portfolioData.profile;
  $('#profileKicker').textContent = p.kicker;
  $('#profileName').textContent = p.name;
  $('#profileName').dataset.text = p.name;
  $('#profileTitle').textContent = p.title;
  $('#profileSubtitle').textContent = p.subtitle;
  $('#profileStatus').textContent = p.status;
  $('#profileAvatar').src = p.avatar;
  $('#aboutText').textContent = p.about;
  $('#downloadCvHero').href = p.cv;

  $('#heroTags').innerHTML = portfolioData.heroTags.map(t => `<span>${escapeHtml(t)}</span>`).join('');
  $('#identityPills').innerHTML = portfolioData.identityPills.map(t => `<span>${escapeHtml(t)}</span>`).join('');
  $('#statsPanel').innerHTML = portfolioData.stats.map(s => `<div class="stat-item"><strong>${escapeHtml(s.value)}</strong><span>${escapeHtml(s.label)}</span></div>`).join('');
}

function socialIcon(label = '') {
  const key = label.toLowerCase();
  if (key.includes('linkedin')) return `<span class="social-icon-svg" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.35 8h4.3v14H.35V8zm7.4 0h4.12v1.9h.06c.57-1.08 1.98-2.22 4.08-2.22 4.36 0 5.16 2.87 5.16 6.6V22h-4.3v-6.84c0-1.63-.03-3.73-2.28-3.73-2.28 0-2.63 1.78-2.63 3.62V22h-4.3V8z"/></svg></span>`;
  if (key.includes('github')) return `<span class="social-icon-svg" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.8-.25.8-.56v-2.15c-3.25.7-3.94-1.39-3.94-1.39-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.59-.3-5.32-1.3-5.32-5.76 0-1.27.45-2.3 1.2-3.12-.12-.3-.52-1.5.12-3.08 0 0 .98-.31 3.18 1.19a11.1 11.1 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.65 1.58.25 2.78.13 3.08.75.82 1.2 1.85 1.2 3.12 0 4.48-2.73 5.45-5.34 5.74.42.36.8 1.08.8 2.18v3.18c0 .31.21.67.81.56A11.5 11.5 0 0 0 12 .5z"/></svg></span>`;
  if (key.includes('twitter') || key === 'x') return `<span class="social-icon-svg" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M18.9 2h3.3l-7.2 8.23L23.5 22h-6.64l-5.2-6.8L5.7 22H2.4l7.7-8.8L2 2h6.8l4.7 6.22L18.9 2zm-1.16 17.93h1.83L7.8 3.96H5.83l11.9 15.97z"/></svg></span>`;
  if (key.includes('medium')) return `<span class="social-icon-svg" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M13.54 12c0 3.45-2.78 6.25-6.2 6.25S1.14 15.45 1.14 12s2.78-6.25 6.2-6.25 6.2 2.8 6.2 6.25zm6.8 0c0 3.25-1.39 5.88-3.1 5.88s-3.1-2.63-3.1-5.88 1.39-5.88 3.1-5.88 3.1 2.63 3.1 5.88zm2.52 0c0 2.91-.49 5.27-1.1 5.27s-1.1-2.36-1.1-5.27.49-5.27 1.1-5.27 1.1 2.36 1.1 5.27z"/></svg></span>`;
  if (key.includes('tryhackme')) return `<span class="social-icon-svg" aria-hidden="true">THM</span>`;
  if (key.includes('resume')) return `<span class="social-icon-svg" aria-hidden="true">CV</span>`;
  if (key.includes('email')) return `<span class="social-icon-svg" aria-hidden="true">@</span>`;
  return `<span class="social-icon-svg" aria-hidden="true">↗</span>`;
}

function getSocialItems() {
  return portfolioData.contact.filter(item => item.label !== 'Email' && item.label !== 'Resume');
}

function renderSocialEnhancements() {
  const socials = getSocialItems();
  // Hero social chips were intentionally removed to keep the landing area clean.
  const hero = $('#heroSocialStrip');
  if (hero) hero.innerHTML = '';
  const orbit = $('#socialOrbitCard');
  if (orbit) {
    orbit.innerHTML = `
      <div class="orbit-system">
        <span class="orbit-ring-line one"></span>
        <span class="orbit-ring-line two"></span>
        <div class="orbit-center"><div><strong>amd11o</strong><span>public handle</span></div></div>
        ${socials.slice(0,5).map((item, index) => `
          <a class="orbit-node magnetic" data-i="${index}" href="${item.url}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(item.label)}">
            ${socialIcon(item.label)}<span class="orbit-tooltip">${escapeHtml(item.label)}</span>
          </a>
        `).join('')}
      </div>
    `;
  }
  const dock = $('#socialDock');
  if (dock) {
    dock.innerHTML = socials.map((item, index) => `
      <a class="magnetic ${index === 0 ? 'active-pulse' : ''}" href="${item.url}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(item.label)}">
        ${socialIcon(item.label)}<span class="orbit-tooltip">${escapeHtml(item.label)}</span>
      </a>
    `).join('');
  }
  const footerIcons = $('#footerSocialIcons');
  if (footerIcons) {
    footerIcons.innerHTML = socials.map(item => `
      <a class="footer-social-icon magnetic" href="${item.url}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(item.label)}">
        ${socialIcon(item.label)}<span class="orbit-tooltip">${escapeHtml(item.label)}</span>
      </a>
    `).join('');
  }
}

function renderQuickModules() {
  $('#quickModules').innerHTML = portfolioData.quickModules.map((m, i) => `
    <a class="module-card reveal tilt-card magnetic" href="${m.target}">
      <span class="card-index">0${i + 1}</span>
      <h3>${escapeHtml(m.title)}</h3>
      <p>${escapeHtml(m.desc)}</p>
      <footer>open module →</footer>
    </a>
  `).join('');
}

function renderSkills() {
  $('#skillsGrid').innerHTML = portfolioData.skills.map(skill => `
    <article class="skill-card reveal tilt-card">
      <div class="skill-top"><div class="skill-icon">${skill.icon}</div><span class="chip">${skill.items.length} items</span></div>
      <h3>${escapeHtml(skill.title)}</h3>
      <ul>${skill.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function renderExperience() {
  $('#experienceTimeline').innerHTML = portfolioData.experience.map(item => `
    <article class="timeline-card reveal tilt-card">
      <div class="timeline-meta"><span>${escapeHtml(item.period)}</span></div>
      <h3>${escapeHtml(item.role)}</h3>
      <p><strong>${escapeHtml(item.company)}</strong></p>
      <p>${escapeHtml(item.desc)}</p>
      <div class="project-tags">${item.tags.map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div>
    </article>
  `).join('');
}

function categoriesFor(items) {
  return ['All', ...new Set(items.map(i => i.category))];
}

function renderFilters(target, items, active, onClick) {
  const host = $(target);
  host.innerHTML = categoriesFor(items).map(cat => `<button class="${cat === active ? 'active' : ''}" data-filter="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`).join('');
  $$('button', host).forEach(btn => btn.addEventListener('click', () => onClick(btn.dataset.filter)));
}

function renderCredentials() {
  renderFilters('#certFilters', portfolioData.certifications, ui.certFilter, filter => {
    ui.certFilter = filter;
    renderCredentials();
  });
  const items = portfolioData.certifications.filter(i => ui.certFilter === 'All' || i.category === ui.certFilter);
  $('#certificationGrid').innerHTML = items.map(item => credentialCard(item)).join('');
  attachModalEvents();
  initTiltCards();
}

function renderAwards() {
  renderFilters('#awardFilters', portfolioData.awards, ui.awardFilter, filter => {
    ui.awardFilter = filter;
    renderAwards();
  });
  const items = portfolioData.awards.filter(i => ui.awardFilter === 'All' || i.category === ui.awardFilter);
  $('#awardGrid').innerHTML = items.map(item => credentialCard(item)).join('');
  attachModalEvents();
  initTiltCards();
}

function credentialCard(item) {
  return `
    <article class="credential-card reveal tilt-card" data-image="${item.image}" data-title="${escapeHtml(item.title)}" data-meta="${escapeHtml(`${item.issuer} • ${item.date}`)}" data-doc="${item.doc || item.image}">
      <div class="credential-medal" title="Credential badge">${escapeHtml(item.badge || '🏅')}</div>
      <div class="credential-image"><img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" /></div>
      <div class="credential-body">
        <span class="type">${escapeHtml(item.type || item.category)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <div class="card-meta"><span>${escapeHtml(item.issuer)}</span><span>${escapeHtml(item.date)}</span></div>
        <p>${escapeHtml(item.desc)}</p>
      </div>
    </article>
  `;
}

function actionButtonForProjectLink(link) {
  const label = escapeHtml(link.label || 'Open');
  const url = String(link.url || '#');
  if (url === '#') {
    return `<button class="text-link project-action" type="button" data-project-placeholder="true">${label} ↗</button>`;
  }
  if (url.startsWith('#writeups')) {
    return `<button class="text-link project-action" type="button" data-open-writeups="root">${label} ↗</button>`;
  }
  if (url.startsWith('#')) {
    return `<a class="text-link" href="${escapeHtml(url)}">${label} ↗</a>`;
  }
  if (/\.(md|pdf)$/i.test(url) || url.startsWith('assets/')) {
    return `<button class="text-link project-resource" type="button" data-resource="${escapeHtml(url)}">${label} ↗</button>`;
  }
  return `<a class="text-link" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${label} ↗</a>`;
}

function resourceToFile(url, fallbackTitle = 'Portfolio Resource', fallbackType = 'Notebook') {
  return portfolioData.writeupLibrary.files.find(f => f.url === url) || {
    title: fallbackTitle,
    type: /\.pdf$/i.test(url) ? 'PDF' : 'Notebook',
    status: fallbackType,
    date: 'Portfolio Resource',
    url,
    desc: ''
  };
}

function renderProjects() {
  $('#projectStack').innerHTML = portfolioData.projects.map(p => `
    <article class="project-card reveal tilt-card">
      <figure><img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy" /></figure>
      <div class="project-content">
        <span class="project-category">${escapeHtml(p.category)}</span>
        <h3>${escapeHtml(p.title)}</h3>
        <div class="card-meta"><span>${escapeHtml(p.period)}</span></div>
        <p>${escapeHtml(p.desc)}</p>
        <div class="project-tags">${p.tags.map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div>
        <div class="project-actions">${p.links.map(actionButtonForProjectLink).join('')}</div>
      </div>
    </article>
  `).join('');
  $$('.project-resource').forEach(btn => btn.addEventListener('click', () => {
    const project = btn.closest('.project-card')?.querySelector('h3')?.textContent || 'Project Notes';
    openArticleReader(resourceToFile(btn.dataset.resource, project, 'Project Notes'));
  }));
  $$('.project-action[data-open-writeups]').forEach(btn => btn.addEventListener('click', () => openWriteupWindow(btn.dataset.openWriteups || 'root')));
  $$('.project-action[data-project-placeholder]').forEach(btn => btn.addEventListener('click', () => openWriteupWindow('cybersecurity')));
}


function markdownToHtml(markdown = '') {
  const lines = String(markdown).replace(/\r\n/g, '\n').split('\n');
  let html = '';
  let inCode = false;
  let codeLang = '';
  let codeLines = [];
  let inList = false;
  let inQuote = false;

  function closeList() { if (inList) { html += '</ul>'; inList = false; } }
  function closeQuote() { if (inQuote) { html += '</blockquote>'; inQuote = false; } }
  function inline(text) {
    return escapeHtml(text)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');
  }
  function flushCode() {
    const code = escapeHtml(codeLines.join('\n'));
    html += `<div class="code-card"><div class="code-head"><span>${escapeHtml(codeLang || 'text')}</span><button type="button" class="copy-code">Copy</button></div><pre><code>${code}</code></pre></div>`;
    codeLines = [];
    codeLang = '';
  }

  for (const raw of lines) {
    const line = raw;
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      if (!inCode) {
        closeList(); closeQuote();
        inCode = true;
        codeLang = trimmed.replace('```', '').trim() || 'text';
      } else {
        inCode = false;
        flushCode();
      }
      continue;
    }
    if (inCode) { codeLines.push(line); continue; }

    if (!trimmed) { closeList(); closeQuote(); continue; }
    if (trimmed === '---') { closeList(); closeQuote(); html += '<hr />'; continue; }

    const h = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      closeList(); closeQuote();
      const level = h[1].length;
      const text = h[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9\u0600-\u06FF]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
      html += `<h${level} id="${escapeHtml(id)}">${inline(text)}</h${level}>`;
      continue;
    }

    if (trimmed.startsWith('>')) {
      closeList();
      if (!inQuote) { html += '<blockquote>'; inQuote = true; }
      html += `<p>${inline(trimmed.replace(/^>\s?/, ''))}</p>`;
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      closeQuote();
      if (!inList) { html += '<ul>'; inList = true; }
      html += `<li>${inline(trimmed.replace(/^[-*]\s+/, ''))}</li>`;
      continue;
    }

    closeList(); closeQuote();
    html += `<p>${inline(trimmed)}</p>`;
  }
  closeList(); closeQuote();
  if (inCode) flushCode();
  return html;
}

function buildArticleToc(contentEl) {
  const toc = $('#readerToc');
  const heads = $$('h2, h3', contentEl);
  if (!heads.length) {
    toc.innerHTML = '<small>No sections</small>';
    return;
  }
  toc.innerHTML = `<strong>Sections</strong>${heads.map(h => `<a href="#${h.id}" data-target="${h.id}">${escapeHtml(h.textContent)}</a>`).join('')}`;
  $$('a', toc).forEach(a => {
    a.addEventListener('click', event => {
      event.preventDefault();
      contentEl.querySelector(`#${CSS.escape(a.dataset.target)}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function attachCodeCopy(root = document) {
  $$('.copy-code', root).forEach(button => {
    button.addEventListener('click', async () => {
      const code = button.closest('.code-card')?.querySelector('code')?.textContent || '';
      try { await navigator.clipboard.writeText(code); button.textContent = 'Copied'; }
      catch { button.textContent = 'Copy failed'; }
      setTimeout(() => button.textContent = 'Copy', 1200);
    });
  });
}

function openArticleReader(file) {
  const reader = $('#articleReader');
  const content = $('#readerContent');
  const title = $('#readerTitle');
  const meta = $('#readerMeta');
  const progress = $('#readerProgress');
  if (!reader || !content || !file) return;

  title.textContent = file.title;
  meta.textContent = `${file.type} · ${file.status} · ${file.date}`;
  progress.style.width = '0%';

  if ((file.type || '').toLowerCase().includes('pdf') || /\.pdf$/i.test(file.url)) {
    content.classList.add('pdf-mode');
    content.innerHTML = `<iframe class="pdf-frame" src="${file.url}" title="${escapeHtml(file.title)}"></iframe>`;
    $('#readerToc').innerHTML = '<strong>Document</strong><small>PDF preview is embedded inside this portfolio reader.</small>';
  } else {
    content.classList.remove('pdf-mode');
    const md = (window.articleContent && window.articleContent[file.url]) || `# ${file.title}\n\nThis note is connected to ${file.url}. If it does not render locally, open the full file or host the portfolio on Netlify/GitHub Pages.`;
    content.innerHTML = markdownToHtml(md);
    buildArticleToc(content);
    attachCodeCopy(content);
  }

  reader.classList.add('open');
  reader.setAttribute('aria-hidden', 'false');
  content.scrollTop = 0;
}

function closeArticleReader() {
  $('#articleReader')?.classList.remove('open');
  $('#articleReader')?.setAttribute('aria-hidden', 'true');
}

function initArticleReader() {
  $('#closeArticleReader')?.addEventListener('click', closeArticleReader);
  $('#readerZen')?.addEventListener('click', () => $('#articleReader')?.classList.toggle('zen'));
  $('#readerPrint')?.addEventListener('click', () => window.print());
  $('#readerContent')?.addEventListener('scroll', () => {
    const el = $('#readerContent');
    const max = Math.max(1, el.scrollHeight - el.clientHeight);
    $('#readerProgress').style.width = `${Math.min(100, (el.scrollTop / max) * 100)}%`;
  });
}


function renderWriteupPreview() {
  const host = $('#writeupPreview');
  if (!host) return;
  const folders = portfolioData.writeupLibrary.folders;
  const files = portfolioData.writeupLibrary.files.slice(0, 3);
  host.innerHTML = `
    <div class="preview-toolbar"><span class="mono">/home/ahmed/private-notebook</span><button class="btn ghost magnetic" id="openWriteupWindowInline" type="button">Launch Window ↗</button></div>
    <div class="preview-folders">
      ${folders.map(folder => `
        <button class="mini-folder" data-folder="${folder.id}">
          <span>${folder.icon}</span><strong>${escapeHtml(folder.title)}</strong><b>${folder.count}</b>
        </button>
      `).join('')}
    </div>
    <div class="preview-files">
      ${files.map(file => `<button type="button" class="preview-file" data-url="${escapeHtml(file.url)}"><span>${file.icon}</span><div><strong>${escapeHtml(file.title)}</strong><small>${escapeHtml(file.type)} · ${escapeHtml(file.status)}</small></div></button>`).join('')}
    </div>
  `;
  $('#openWriteupWindowInline')?.addEventListener('click', () => openWriteupWindow('root'));
  $$('.mini-folder', host).forEach(btn => btn.addEventListener('click', () => openWriteupWindow(btn.dataset.folder)));
  $$('.preview-file', host).forEach(btn => btn.addEventListener('click', () => {
    const file = portfolioData.writeupLibrary.files.find(f => f.url === btn.dataset.url);
    openArticleReader(file);
  }));
}

function folderById(id) {
  return portfolioData.writeupLibrary.folders.find(f => f.id === id);
}

function renderWriteupWindow(folder = ui.writeupFolder, query = '') {
  const sidebar = $('#writeupSidebar');
  const foldersHost = $('#writeupFolderGrid');
  const filesHost = $('#writeupFileGrid');
  const path = $('#writeupPath');
  if (!sidebar || !foldersHost || !filesHost || !path) return;
  ui.writeupFolder = folder;
  const folders = portfolioData.writeupLibrary.folders;
  const files = portfolioData.writeupLibrary.files;
  const normalizedQuery = query.trim().toLowerCase();
  const activeTitle = folder === 'root' ? 'root' : folderById(folder)?.title || folder;

  path.textContent = activeTitle;
  sidebar.innerHTML = `
    <button class="sidebar-item ${folder === 'root' ? 'active' : ''}" data-folder="root"><span>⌂</span>Root</button>
    ${folders.map(f => `<button class="sidebar-item ${folder === f.id ? 'active' : ''}" data-folder="${f.id}"><span>${f.icon}</span>${escapeHtml(f.title)}</button>`).join('')}
  `;

  const visibleFolders = folder === 'root' && !normalizedQuery ? folders : [];
  foldersHost.innerHTML = visibleFolders.map(f => `
    <button class="kali-folder ${f.color}" data-folder="${f.id}">
      <span class="folder-count">${f.count}</span>
      <i>${f.icon}</i>
      <strong>${escapeHtml(f.title)}</strong>
    </button>
  `).join('');

  const visibleFiles = files.filter(file => {
    const inFolder = folder === 'root' || file.folder === folder;
    const text = `${file.title} ${file.type} ${file.status} ${file.desc}`.toLowerCase();
    const matches = !normalizedQuery || text.includes(normalizedQuery);
    return inFolder && matches;
  });
  filesHost.innerHTML = visibleFiles.map(file => `
    <button class="kali-file" type="button" data-url="${escapeHtml(file.url)}">
      <span class="file-icon">${file.icon}</span>
      <div>
        <strong>${escapeHtml(file.title)}</strong>
        <small>${escapeHtml(file.type)} · ${escapeHtml(file.status)} · ${escapeHtml(file.date)}</small>
        <p>${escapeHtml(file.desc)}</p>
      </div>
      <b class="open-pill">Open</b>
    </button>
  `).join('') || `<div class="empty-folder">No files found in this notebook view.</div>`;

  $$('.sidebar-item').forEach(btn => btn.addEventListener('click', () => renderWriteupWindow(btn.dataset.folder, $('#writeupSearch').value || '')));
  $$('.kali-folder').forEach(btn => btn.addEventListener('click', () => renderWriteupWindow(btn.dataset.folder, $('#writeupSearch').value || '')));
  $$('.kali-file').forEach(btn => btn.addEventListener('click', () => {
    const file = portfolioData.writeupLibrary.files.find(f => f.url === btn.dataset.url);
    openArticleReader(file);
  }));
}

function openWriteupWindow(folder = 'root') {
  $('#writeupWindow')?.classList.add('open');
  $('#writeupSearch').value = '';
  renderWriteupWindow(folder);
}

function closeWriteupWindow() {
  $('#writeupWindow')?.classList.remove('open');
}

function initWriteupWindow() {
  $('#openWriteupWindow')?.addEventListener('click', () => openWriteupWindow('root'));
  $('#closeWriteupWindow')?.addEventListener('click', closeWriteupWindow);
  $('#writeupSearch')?.addEventListener('input', e => renderWriteupWindow(ui.writeupFolder, e.target.value));
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openWriteupWindow('root');
      setTimeout(() => $('#writeupSearch')?.focus(), 80);
    }
    if (e.key === 'Escape') {
      closeArticleReader();
      closeWriteupWindow();
      $('#settingsPanel')?.classList.remove('open');
      $('#cyberbot')?.classList.remove('open');
    }
  });
}

function getCurrentLanguage() {
  return document.body.dataset.language || document.documentElement.lang || 'en';
}

function populateBotSuggestions() {
  const host = $('#botSuggestions');
  if (!host || !portfolioData) return;
  const lang = getCurrentLanguage();
  const suggestions = lang === 'ar' && portfolioData.botSuggestionsAr ? portfolioData.botSuggestionsAr : portfolioData.botSuggestions;
  host.innerHTML = suggestions.map(q => `<button type="button" data-q="${escapeHtml(q)}">${escapeHtml(q)}</button>`).join('');
}

function applyLanguage(lang = 'en') {
  const pack = portfolioData.translations?.[lang] || portfolioData.translations?.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dataset.language = lang;
  if (!pack) return;
  Object.entries(pack.text || {}).forEach(([selector, value]) => {
    const el = $(selector);
    if (el) el.textContent = value;
  });
  Object.entries(pack.html || {}).forEach(([selector, value]) => {
    const el = $(selector);
    if (el) el.innerHTML = value;
  });
  Object.entries(pack.placeholder || {}).forEach(([selector, value]) => {
    const el = $(selector);
    if (el) el.placeholder = value;
  });
  populateBotSuggestions();
}

function initSettings() {
  const panel = $('#settingsPanel');
  const defaults = { palette: 'tactical-cyan', readability: 'medium', font: 'modern', mode: 'dark', language: 'en' };
  const saved = { ...defaults, ...JSON.parse(localStorage.getItem('portfolioSettings') || '{}') };

  function applySetting(name, value, save = true) {
    if (name === 'palette') document.body.dataset.palette = value;
    if (name === 'readability') document.body.dataset.readability = value;
    if (name === 'font') document.body.dataset.font = value;
    if (name === 'mode') document.body.dataset.mode = value;
    if (name === 'language') {
      applyLanguage(value);
    }
    $$('.settings-options').forEach(group => {
      if (group.dataset.setting !== name) return;
      $$('button', group).forEach(btn => btn.classList.toggle('active', btn.dataset.value === value));
    });
    if (save) {
      saved[name] = value;
      localStorage.setItem('portfolioSettings', JSON.stringify(saved));
    }
  }

  Object.entries(saved).forEach(([k, v]) => applySetting(k, v, false));
  const toggleSettings = () => panel.classList.toggle('open');
  $('#settingsFab')?.addEventListener('click', toggleSettings);
  $('#railSettings')?.addEventListener('click', toggleSettings);
  $('#closeSettings')?.addEventListener('click', () => panel.classList.remove('open'));
  document.addEventListener('click', (event) => {
    if (!panel.classList.contains('open')) return;
    if (panel.contains(event.target) || event.target.closest('#settingsFab') || event.target.closest('#railSettings') || event.target.closest('#topSettings')) return;
    panel.classList.remove('open');
  });
  $$('.settings-options button').forEach(btn => {
    btn.addEventListener('click', () => applySetting(btn.closest('.settings-options').dataset.setting, btn.dataset.value));
  });
}

function renderReports() {
  $('#reportsGrid').innerHTML = portfolioData.reports.map(r => `
    <article class="report-card reveal tilt-card" data-link="${escapeHtml(r.link)}" data-title="${escapeHtml(r.title)}" data-type="${escapeHtml(r.type)}">
      <span class="chip">${escapeHtml(r.type)}</span>
      <h3>${escapeHtml(r.title)}</h3>
      <p>${escapeHtml(r.desc)}</p>
      <footer><button class="text-link report-open" type="button">Open report ↗</button></footer>
    </article>
  `).join('');
  $$('.report-open').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.report-card');
      const url = card.dataset.link;
      const file = portfolioData.writeupLibrary.files.find(f => f.url === url) || {
        title: card.dataset.title,
        type: /\.pdf$/i.test(url) ? 'PDF' : 'Markdown',
        status: card.dataset.type,
        date: 'Portfolio Resource',
        url,
        desc: ''
      };
      openArticleReader(file);
    });
  });
}

function renderContact() {
  const rows = portfolioData.contact.map(c => `
    <a class="contact-link magnetic" href="${c.url}" ${c.url.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>
      <span class="contact-icon">${socialIcon(c.label)}</span>
      <div><small>${escapeHtml(c.label)}</small><strong>${escapeHtml(c.value)}</strong></div><b>↗</b>
    </a>
  `).join('');
  $('#contactLinks').innerHTML = rows;
  $('#footerLinks').innerHTML = portfolioData.contact.filter(c => c.label !== 'Resume').map(c => `<a href="${c.url}" ${c.url.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${escapeHtml(c.label)}</a>`).join('');
  $('#year').textContent = new Date().getFullYear();
}

function attachModalEvents() {
  $$('.credential-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.image, card.dataset.title, card.dataset.meta, card.dataset.doc));
  });
}

function openModal(image, title, meta, doc) {
  $('#modalImage').src = image;
  $('#modalTitle').textContent = title;
  $('#modalMeta').textContent = meta;
  $('#modalDoc').href = doc;
  $('#assetModal').classList.add('open');
  $('#assetModal').setAttribute('aria-hidden', 'false');
}

function closeModal() {
  $('#assetModal').classList.remove('open');
  $('#assetModal').setAttribute('aria-hidden', 'true');
}

function initModal() {
  $('#modalClose').addEventListener('click', closeModal);
  $('#assetModal').addEventListener('click', e => { if (e.target.id === 'assetModal') closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function heroTerminal() {
  const el = $('#heroTerminalText');
  const lines = [
    '$ whoami\nAhmed Gubran',
    '$ focus --areas\nSOC Operations | Penetration Testing | Web Security | SIEM',
    '$ certs --top\neJPT | Security+ | HCIA | CCNA | PL-900 | AI-900',
    '$ status\nPortfolio loaded. Terminal navigation is online.'
  ];
  let text = '', line = 0, char = 0;
  function type() {
    if (line >= lines.length) return;
    const current = lines[line];
    text += current[char] || '';
    el.textContent = text;
    char++;
    if (char >= current.length) {
      text += '\n\n'; line++; char = 0;
      setTimeout(type, 180); return;
    }
    setTimeout(type, current[char - 1] === '\n' ? 80 : 18);
  }
  type();
}


function openTerminalDrawer() {
  const drawer = $('#terminalDrawer');
  const backdrop = $('#terminalBackdrop');
  const input = $('#shellCommand');
  if (!drawer) return;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  backdrop?.classList.add('open');
  setTimeout(() => input?.focus(), 140);
}

function closeTerminalDrawer() {
  const drawer = $('#terminalDrawer');
  const backdrop = $('#terminalBackdrop');
  if (!drawer) return;
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  backdrop?.classList.remove('open');
}

function toggleTerminalDrawer() {
  const drawer = $('#terminalDrawer');
  if (!drawer) return;
  drawer.classList.contains('open') ? closeTerminalDrawer() : openTerminalDrawer();
}

function initTerminalDrawer() {
  const openers = ['#terminalFab', '#openTerminalHero', '#railTerminal', '#topTerminal'];
  openers.forEach(selector => {
    $(selector)?.addEventListener('click', event => {
      event.preventDefault();
      toggleTerminalDrawer();
      $('#mainMenu')?.classList.remove('open');
    });
  });
  $('#terminalClose')?.addEventListener('click', closeTerminalDrawer);
  $('#terminalMinimize')?.addEventListener('click', closeTerminalDrawer);
  $('#terminalBackdrop')?.addEventListener('click', closeTerminalDrawer);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeTerminalDrawer();
  });
  // Any old internal links to #terminal now open the drawer instead of jumping.
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href="#terminal"]');
    if (!link) return;
    event.preventDefault();
    openTerminalDrawer();
  });
}

function initShell() {
  const output = $('#shellOutput');
  const form = $('#shellForm');
  const input = $('#shellCommand');

  const print = (html) => {
    const div = document.createElement('div');
    div.className = 'shell-line';
    div.innerHTML = html;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  };
  const prompt = (cmd) => print(`<span class="prompt">ahmed@portfolio:~$</span> <span class="cmd">${escapeHtml(cmd)}</span>`);

  function list(items) { return items.map(i => `  • ${i}`).join('\n'); }

  const commands = {
    help: () => `Available commands:\n${portfolioData.terminal.help.map(c => `  ${c}`).join('\n')}\n\nTip: try cgpa, cat report.txt, open smap-report, ask cyberbot, settings, or ejpt --info.`,
    ls: () => 'about/  terminal-drawer/  skills/  experience/  certifications/  projects/  writeups/  awards/  reports/  contact/  settings/  assets/  cv.pdf',
    pwd: () => '/home/ahmed/cyber-portfolio',
    whoami: () => `${portfolioData.profile.name}\n${portfolioData.profile.title}\n${portfolioData.profile.subtitle}`,
    neofetch: () => `          .--.
         |o_o |   User: Ahmed Gubran
         |:_/ |   Focus: SOC + Pentesting
        //   \\ \\  Certs: eJPT, Security+, HCIA, CCNA, AI-900
       (|     | ) GitHub: github.com/amd11o
      /'\\_   _/\\  X/Twitter: x.com/amd11o
      \\___)=(___/  Status: Available`,
    clear: () => '__CLEAR__',
    'cat profile.txt': () => `${portfolioData.profile.about}\n\nContact: ${portfolioData.profile.email}\nLocation: ${portfolioData.profile.location}`,
    'cat certs.txt': () => list(portfolioData.certifications.map(c => `${c.title} — ${c.issuer} (${c.date})`)),
    'cat skills.txt': () => list(portfolioData.skills.map(s => `${s.title}: ${s.items.join(', ')}`)),
    'cat projects.txt': () => list(portfolioData.projects.map(p => `${p.title} — ${p.category}`)),
    'ls writeups': () => list(portfolioData.writeupLibrary.folders.map(f => `${f.icon} ${f.title}/ (${f.count})`)),
    'cgpa': () => 'UTHM CGPA: 3.55/4.00\nBrawijaya GPA/cGPA: 4.00/4.00\nDean’s Award GPAs: 3.80, 3.68, 3.91',
    'cat report.txt': () => 'SMAP Online Files Repository Report\nSeverity: Critical\nMain weaknesses: broken server-side access control, IDOR-style object access risk, predictable document references, direct PDF exposure, and UI-only restricted mode.\nRemediation: opaque IDs, backend ownership checks, protected file streaming, URL invalidation, rate limiting, monitoring, and retesting.',
    'ejpt --info': () => 'eJPT = eLearnSecurity Junior Penetration Tester. In this portfolio it represents Ahmed’s junior practical penetration-testing path: recon, scanning, enumeration, controlled exploitation in authorized labs, documentation, and reporting mindset. Always verify official exam details with INE because blueprints can change.',
    'certs --verify': () => list(portfolioData.certifications.map(c => `${c.title} — ${c.issuer} — ${c.date}`)),
    socials: () => `GitHub: ${portfolioData.profile.github}\nX/Twitter: ${portfolioData.profile.twitter}\nLinkedIn: ${portfolioData.profile.linkedin}`,
    contact: () => `Email: ${portfolioData.profile.email}\nLinkedIn: ${portfolioData.profile.linkedin}\nGitHub: ${portfolioData.profile.github}\nX/Twitter: ${portfolioData.profile.twitter}`,
    settings: () => 'Opening settings panel...',
    'sudo hire-ahmed': () => '[sudo] password for recruiter: ********\nAccess granted. Opening contact section...'
  };

  const openMap = {
    'open about': '#about',
    'open skills': '#skills',
    'open experience': '#experience',
    'open certifications': '#certifications',
    'open certs': '#certifications',
    'open credentials': '#certifications',
    'open projects': '#projects',
    'open writeups': '#writeups',
    'open write-ups': '#writeups',
    'open awards': '#awards',
    'open reports': '#reports',
    'open contact': '#contact'
  };

  const actionMap = {
    'open terminal': () => openTerminalDrawer(),
    'terminal': () => openTerminalDrawer(),
    'open github': () => window.open(portfolioData.profile.github, '_blank'),
    'open twitter': () => window.open(portfolioData.profile.twitter, '_blank'),
    'open x': () => window.open(portfolioData.profile.twitter, '_blank'),
    'open medium': () => window.open(portfolioData.profile.medium, '_blank'),
    'open tryhackme': () => window.open(portfolioData.profile.tryhackme, '_blank'),
    'open thm': () => window.open(portfolioData.profile.tryhackme, '_blank'),
    'settings': () => $('#settingsPanel')?.classList.add('open'),
    'open settings': () => $('#settingsPanel')?.classList.add('open'),
    'file-manager': () => openWriteupWindow('root'),
    'open file-manager': () => openWriteupWindow('root'),
    'open smap-report': () => window.open('assets/reports/Vulnerability_Report_SMAP_Ahmed_Gubran.pdf', '_blank'),
    'open report': () => window.open('assets/reports/Vulnerability_Report_SMAP_Ahmed_Gubran.pdf', '_blank'),
    'ask cyberbot': () => $('#cyberbot')?.classList.add('open')
  };

  function run(raw) {
    const cmd = raw.trim().toLowerCase().replace(/\s+/g, ' ');
    if (!cmd) return;
    prompt(raw);
    ui.commandHistory.push(raw);
    ui.historyIndex = ui.commandHistory.length;

    if (openMap[cmd]) {
      print(`Opening ${openMap[cmd]} ...`);
      document.querySelector(openMap[cmd]).scrollIntoView({ behavior: 'smooth' });
      if (cmd.includes('writeup')) openWriteupWindow('root');
      return;
    }
    if (actionMap[cmd]) {
      actionMap[cmd]();
      print(`Executed action: ${escapeHtml(cmd)}`);
      return;
    }
    if (cmd === 'sudo hire-ahmed') {
      print(commands[cmd]().replace(/\n/g, '<br>'));
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const result = commands[cmd] ? commands[cmd]() : `command not found: ${escapeHtml(raw)}\nTry: help`;
    if (result === '__CLEAR__') output.innerHTML = '';
    else print(escapeHtml(result).replace(/\n/g, '<br>'));
  }

  print('Welcome to Ahmed\'s portfolio terminal.<br>Type <b>help</b> to list commands.');
  form.addEventListener('submit', e => { e.preventDefault(); run(input.value); input.value = ''; });
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      ui.historyIndex = Math.max(0, ui.historyIndex - 1);
      input.value = ui.commandHistory[ui.historyIndex] || input.value;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      ui.historyIndex = Math.min(ui.commandHistory.length, ui.historyIndex + 1);
      input.value = ui.commandHistory[ui.historyIndex] || '';
    }
  });
}

function initBot() {
  const bot = $('#cyberbot');
  const messages = $('#botMessages');
  const input = $('#botInput');
  const form = $('#botForm');
  const search = $('#botSearch');
  const searchResults = $('#botSearchResults');
  const commandPool = portfolioData.commandKnowledge || [];
  const topicPool = [ ...(portfolioData.knowledgeBase || []), ...(portfolioData.cyberKnowledgeBase || []), ...(portfolioData.extraCyberKnowledge || []) ];
  const pool = [...topicPool, ...commandPool.map(cmd => ({
    topic: `${cmd.title} command`,
    keywords: [cmd.command, ...(cmd.aliases || []), cmd.title],
    answer: formatCommandAnswer(cmd)
  }))];

  function formatCommandAnswer(cmd) {
    return `Tool: ${cmd.title}\n\nUse: ${cmd.safe}\n\nExample:\n${cmd.example}\n\nMy note: ${cmd.note}\n\nScope reminder: use this only in authorized labs, owned systems, or approved assessments.`;
  }

  function formatBotText(text = '') {
    const escaped = escapeHtml(text);
    return escaped
      .replace(/```([\s\S]*?)```/g, '<pre class="bot-code"><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n- /g, '<br>• ')
      .replace(/\n/g, '<br>');
  }

  function add(text, role = 'bot', meta = '') {
    const div = document.createElement('div');
    div.className = `bot-message ${role}`;
    if (role === 'bot') {
      div.innerHTML = `${meta ? `<small class="bot-meta">${escapeHtml(meta)}</small>` : ''}${formatBotText(text)}<button class="copy-bot" type="button">Copy</button>`;
      div.querySelector('.copy-bot')?.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(text); div.querySelector('.copy-bot').textContent = 'Copied'; }
        catch { div.querySelector('.copy-bot').textContent = 'Copy failed'; }
        setTimeout(() => { const b = div.querySelector('.copy-bot'); if (b) b.textContent = 'Copy'; }, 1300);
      });
    } else {
      div.textContent = text;
    }
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  const botBackdrop = $('#botBackdrop');
  function open() {
    bot.classList.add('open');
    bot.setAttribute('aria-hidden', 'false');
    botBackdrop?.classList.add('open');
    botBackdrop?.setAttribute('aria-hidden', 'false');
    setTimeout(() => input?.focus(), 140);
  }
  function close() {
    bot.classList.remove('open');
    bot.setAttribute('aria-hidden', 'true');
    botBackdrop?.classList.remove('open');
    botBackdrop?.setAttribute('aria-hidden', 'true');
    searchResults?.classList.remove('open');
  }
  function toggle() { bot.classList.contains('open') ? close() : open(); }

  function scoreItem(item, q) {
    const clean = q.toLowerCase();
    const topic = String(item.topic || '').toLowerCase();
    let score = topic.includes(clean) && clean.length > 1 ? 5 : 0;
    score += (item.keywords || []).reduce((sum, k) => {
      const key = String(k).toLowerCase();
      if (!key) return sum;
      if (clean === key) return sum + 12;
      if (clean.includes(key)) return sum + Math.max(2, Math.min(8, Math.floor(key.length / 3)));
      if (key.includes(clean) && clean.length > 2) return sum + 2;
      return sum;
    }, 0);
    return score;
  }

  function commandHelp() {
    return `CyberBot commands:\n${(portfolioData.botCommands || []).join('  ')}\n\nYou can also ask naturally, for example:\n- explain nmap -sV\n- how to fix IDOR\n- what is Ahmed's CGPA?\n- Security+ PBQ tips\n- Burp Suite checklist\n- Kali VPN not working`;
  }

  function directCommand(q) {
    const raw = q.trim();
    const clean = raw.toLowerCase();
    if (clean === '/clear') { messages.innerHTML = ''; return '__NO_REPLY__'; }
    if (clean === '/help' || clean === 'help bot' || clean === 'cyberbot help') return commandHelp();
    if (clean === '/profile') return `${portfolioData.profile.name}\n${portfolioData.profile.title}\n\n${portfolioData.profile.about}\n\nEmail: ${portfolioData.profile.email}\nGitHub: ${portfolioData.profile.github}\nX/Twitter: ${portfolioData.profile.twitter}`;
    if (clean === '/cgpa' || clean === 'cgpa') return 'UTHM CGPA: 3.55/4.00\nBrawijaya GPA/cGPA: 4.00/4.00\nDean’s Award GPAs shown: 3.80, 3.68, 3.91';
    if (clean === '/tryhackme' || clean === 'tryhackme' || clean === 'thm') return 'TryHackMe profile: https://tryhackme.com/p/amd11o\nPortfolio highlight: TryHackMe Top 5 profile/ranking note as provided by Ahmed. This supports his practical lab and CTF-style learning path.';
    if (clean === '/certs') return portfolioData.certifications.map(c => `- ${c.title} — ${c.issuer} (${c.date})`).join('\n');
    if (clean === '/skills') return portfolioData.skills.map(s => `- ${s.title}: ${s.items.join(', ')}`).join('\n');
    if (clean === '/tools') return commandPool.map(c => `- ${c.command}: ${c.title}`).join('\n');
    if (clean === '/pentest-tools') return commandPool.filter(c => /(nmap|burp|hydra|john|hashcat|metasploit|searchsploit|wpscan|gobuster|feroxbuster|ffuf|sqlmap|nikto|impacket|bloodhound|ldapsearch|netexec|crackmapexec|linpeas|winpeas|nuclei|subfinder|katana)/i.test(c.command + ' ' + c.title + ' ' + (c.aliases||[]).join(' '))).map(c => `- ${c.command}: ${c.title}`).join('\n');
    if (clean === '/soc-tools') return commandPool.filter(c => /(kql|sentinel|sigma|yara|volatility|wireshark|tcpdump|zeek|suricata|osquery|defender|splunk|grep)/i.test(c.command + ' ' + c.title + ' ' + (c.aliases||[]).join(' '))).map(c => `- ${c.command}: ${c.title}`).join('\n');
    const topicReply = (name) => {
      const item = topicPool.find(i => String(i.topic || '').toLowerCase().includes(name));
      return item ? item.answer : null;
    };
    if (clean === '/ejpt') return topicReply('ejpt') || 'eJPT notes are available in the write-up library.';
    if (clean === '/security-plus') return topicReply('security+') || topicReply('security plus') || 'Security+ tips are available in the write-up library.';
    if (clean === '/smap') return topicReply('smap') || 'The SMAP report is available in the Reports section.';
    if (clean === '/owasp') return topicReply('owasp') || 'OWASP Top 10 is a common web application risk reference.';
    if (clean === '/soc') return topicReply('soc') || 'SOC triage means reviewing alerts, collecting evidence, and documenting decisions.';
    const commandHit = commandPool.find(cmd => {
      const names = [cmd.command, ...(cmd.aliases || []), cmd.title].map(x => String(x).toLowerCase());
      return names.some(name => clean === name || clean.includes(name) || (name.includes(clean) && clean.length > 2));
    });
    if (commandHit && /(command|cmd|tool|what is|explain|اشرح|امر|أمر|كيف|syntax|use|استخدم)/i.test(raw + ' command')) {
      return formatCommandAnswer(commandHit);
    }
    return null;
  }

  function bestAnswer(q) {
    const hasArabic = /[؀-ۿ]/.test(q);
    const commandReply = directCommand(q);
    if (commandReply) return commandReply;
    if (commandReply === '__NO_REPLY__') return '__NO_REPLY__';
    let best = null, bestScore = 0;
    for (const item of pool) {
      const score = scoreItem(item, q);
      if (score > bestScore) { best = item; bestScore = score; }
    }
    if (!best || bestScore === 0) return hasArabic ? (portfolioData.cyberFallbackAr || portfolioData.cyberFallback) : portfolioData.cyberFallback;
    return hasArabic && best.answerAr ? best.answerAr : best.answer;
  }

  function ask(q) {
    const clean = q.trim();
    if (!clean) return;
    add(clean, 'user');
    if (searchResults) searchResults.classList.remove('open');
    if (search) search.value = '';
    input.value = '';
    setTimeout(() => {
      const answer = bestAnswer(clean);
      if (answer !== '__NO_REPLY__') add(answer, 'bot', 'CyberBot response');
    }, 160);
  }

  function renderSearchResults(q) {
    if (!searchResults) return;
    const query = q.trim().toLowerCase();
    if (!query) {
      searchResults.classList.remove('open');
      searchResults.innerHTML = '';
      return;
    }
    const matches = pool
      .map(item => ({ item, score: scoreItem(item, query) }))
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    if (!matches.length) {
      searchResults.classList.add('open');
      searchResults.innerHTML = `<button type="button" data-free-question="${escapeHtml(q)}">Ask CyberBot <small>${escapeHtml(q)}</small></button>`;
      return;
    }
    searchResults.classList.add('open');
    searchResults.innerHTML = matches.map(({ item }) => `
      <button type="button" data-topic="${escapeHtml(item.topic)}">
        <b>${escapeHtml(item.topic)}</b>
        <small>${escapeHtml((item.keywords || []).slice(0, 7).join(' · '))}</small>
      </button>
    `).join('');
  }

  $('#chatFab')?.addEventListener('click', toggle);
  $('#openBotHero')?.addEventListener('click', open);
  $('#openBotContact')?.addEventListener('click', open);
  $('#railBot')?.addEventListener('click', toggle);
  $('#topBot')?.addEventListener('click', toggle);
  $('#closeBot')?.addEventListener('click', close);
  $('#botMinimize')?.addEventListener('click', close);
  $('#botBackdrop')?.addEventListener('click', close);
  $('#botReset')?.addEventListener('click', () => {
    messages.innerHTML = '';
    add(document.documentElement.dataset.language === 'ar'
      ? 'تم إعادة المحادثة. اسألني عن أدوات السايبر، eJPT، Security+، SOC، أو معلومات أحمد.'
      : 'Conversation reset. Ask me about cyber tools, eJPT, Security+, SOC, or Ahmed’s profile.', 'bot', 'Reset');
  });
  $$('.bot-command-strip button').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.dataset.botCommand || btn.textContent.trim();
      add(q, 'user');
      setTimeout(() => { const answer = bestAnswer(q); if (answer !== '__NO_REPLY__') add(answer, 'bot', 'CyberBot command'); }, 180);
    });
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  populateBotSuggestions();
  $('#botSuggestions')?.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-q]');
    if (!btn) return;
    ask(btn.dataset.q);
  });

  search?.addEventListener('input', e => renderSearchResults(e.target.value));
  search?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      ask(search.value);
    }
    if (e.key === 'Escape') searchResults?.classList.remove('open');
  });
  searchResults?.addEventListener('click', event => {
    const btn = event.target.closest('button');
    if (!btn) return;
    const q = btn.dataset.freeQuestion || btn.dataset.topic;
    ask(q);
  });

  add(getCurrentLanguage() === 'ar'
    ? 'مرحباً، أنا CyberBot. اسألني عن أي مفهوم سايبر، أداة، أمر لينكس، اختبار eJPT، Security+، SOC، OWASP، أو اسألني عن أحمد: المعدل، الشهادات، المشاريع، الجوائز، الروابط، وتقرير SMAP. جرّب /help.'
    : 'Hello, I am CyberBot. Ask me about cyber concepts, tools, Linux commands, eJPT, Security+, SOC, OWASP, or ask about Ahmed: CGPA, certifications, projects, awards, links, and the SMAP report. Try /help.',
    'bot', 'Online');
  form.addEventListener('submit', e => {
    e.preventDefault();
    ask(input.value);
  });
}

function revealOnScroll() {
  const obs = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  }), { threshold: 0.12 });
  $$('.reveal').forEach(el => obs.observe(el));
}

function initMenu() {
  const btn = $('#menuButton');
  const menu = $('#mainMenu');
  btn.addEventListener('click', () => menu.classList.toggle('open'));
  $$('#mainMenu a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

function navSpy() {
  const links = [...$$('.rail a[href^="#"]'), ...$$('#mainMenu a[href^="#"]')];
  const sections = $$('main section[id]');
  function activate() {
    let id = sections[0]?.id;
    sections.forEach(section => { if (section.getBoundingClientRect().top <= 160) id = section.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
  }
  addEventListener('scroll', activate, { passive: true });
  activate();
}

function initCursor() {
  if (innerWidth <= 860) return;
  const dot = $('#cursorDot');
  const ring = $('#cursorRing');
  if (!dot || !ring) return;

  let lastSpark = 0;

  function spawnSoftSpark(x, y) {
    const spark = document.createElement('span');
    spark.className = 'cursor-spark soft';
    const spread = 12;
    spark.style.left = `${x + (Math.random() - 0.5) * 5}px`;
    spark.style.top = `${y + (Math.random() - 0.5) * 5}px`;
    spark.style.setProperty('--sx', `${(Math.random() - 0.5) * spread}px`);
    spark.style.setProperty('--sy', `${(Math.random() - 0.5) * spread}px`);
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 420);
  }

  function handleMove(e) {
    const x = e.clientX ?? (e.touches && e.touches[0]?.clientX);
    const y = e.clientY ?? (e.touches && e.touches[0]?.clientY);
    if (typeof x !== 'number' || typeof y !== 'number') return;

    ui.mouse.x = x;
    ui.mouse.y = y;
    document.documentElement.style.setProperty('--mx', `${x}px`);
    document.documentElement.style.setProperty('--my', `${y}px`);
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    const now = performance.now();
    ui.trail.push({ x, y, life: 1, born: now, size: 1 });
    if (ui.trail.length > 24) ui.trail.shift();

    // Lightweight magic-wand sparkle: small, white, and throttled.
    if (now - lastSpark > 95) {
      spawnSoftSpark(x, y);
      lastSpark = now;
    }
  }

  document.addEventListener('pointermove', handleMove, { passive: true, capture: true });
  document.addEventListener('mousemove', handleMove, { passive: true, capture: true });

  function loop() {
    ui.ring.x += (ui.mouse.x - ui.ring.x) * .14;
    ui.ring.y += (ui.mouse.y - ui.ring.y) * .14;
    ring.style.left = `${ui.ring.x}px`;
    ring.style.top = `${ui.ring.y}px`;
    requestAnimationFrame(loop);
  }
  loop();

  const interactiveSelector = 'a, button, input, textarea, select, label, .tilt-card, .credential-card, .project-card, .rail-action, .command-chip, .modal-card, .reader-window, .writeup-window, .settings-panel, .cyberbot';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveSelector)) ring.classList.add('active');
  }, true);
  document.addEventListener('mouseout', e => {
    if (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest(interactiveSelector)) ring.classList.remove('active');
  }, true);
}

function initTrailCanvas() {
  if (innerWidth <= 860) return;
  const canvas = $('#cursorTrail');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let running = true;

  function resize() {
    canvas.width = innerWidth * devicePixelRatio;
    canvas.height = innerHeight * devicePixelRatio;
    canvas.style.width = `${innerWidth}px`;
    canvas.style.height = `${innerHeight}px`;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }

  resize();
  addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => { running = !document.hidden; });

  function draw() {
    if (!running) {
      requestAnimationFrame(draw);
      return;
    }

    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const now = performance.now();

    // Clean, light, white-only trail for better laptop performance.
    for (let i = 0; i < ui.trail.length - 1; i++) {
      const p = ui.trail[i];
      const n = ui.trail[i + 1];
      const age = Math.max(0, now - (p.born || now));
      p.life *= .93;
      const order = (i + 1) / Math.max(ui.trail.length, 1);
      const alpha = Math.min(.58, p.life * order * (1 - Math.min(age / 620, .78)));
      if (alpha <= .01) continue;

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      const midX = (p.x + n.x) / 2;
      const midY = (p.y + n.y) / 2;
      ctx.quadraticCurveTo(p.x, p.y, midX, midY);
      ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
      ctx.lineWidth = 1.8;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowBlur = 9;
      ctx.shadowColor = 'rgba(255,255,255,.48)';
      ctx.stroke();
      ctx.restore();
    }

    ui.trail = ui.trail.filter(p => p.life > .06 && now - (p.born || now) < 720);
    requestAnimationFrame(draw);
  }
  draw();
}

function initCodeRain() {
  if (innerWidth <= 860) return;
  const canvas = $('#codeRain');
  const ctx = canvas.getContext('2d');
  const chars = '01abcdefABCDEF$#<>/\\{}[]()sudo nmap ssh grep awk burp splunk sentinel alert hash root';
  let size = 15, columns = 0, drops = [];
  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    columns = Math.floor(canvas.width / size);
    drops = Array.from({ length: columns }, () => Math.random() * canvas.height / size);
  }
  function draw() {
    ctx.fillStyle = 'rgba(6,8,13,0.10)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${size}px Consolas, monospace`;
    for (let i = 0; i < drops.length; i++) {
      const txt = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillStyle = Math.random() > .975 ? 'rgba(214,185,104,.72)' : 'rgba(125,211,199,.52)';
      ctx.fillText(txt, i * size, drops[i] * size);
      if (drops[i] * size > canvas.height && Math.random() > .988) drops[i] = 0;
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }
  resize(); addEventListener('resize', resize); draw();
}

function initTiltCards() {
  if (innerWidth <= 860 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  $$('.tilt-card').forEach(card => {
    if (card.dataset.tiltReady) return;
    card.dataset.tiltReady = 'true';
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateY(-3px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)'; });
  });
}

function initMagnetic() {
  if (innerWidth <= 860) return;
  $$('.magnetic').forEach(el => {
    if (el.dataset.magReady) return;
    el.dataset.magReady = 'true';
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * .08}px, ${y * .08}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = 'translate(0,0)'; });
  });
}


function initTopbarActions() {
  $('#topSettings')?.addEventListener('click', () => $('#settingsPanel')?.classList.toggle('open'));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { $('#cyberbot')?.classList.remove('open'); $('#botBackdrop')?.classList.remove('open'); } });
}

function boot() {
  initBoot();
  clock(); setInterval(clock, 30000);
  hydrateProfile();
  initVisitorCounter();
  renderQuickModules();
  renderSkills();
  renderExperience();
  renderCredentials();
  renderProjects();
  renderAwards();
  renderWriteupPreview();
  renderReports();
  renderContact();
  renderSocialEnhancements();
  heroTerminal();
  initShell();
  initTerminalDrawer();
  initWriteupWindow();
  initArticleReader();
  initSettings();
  initTopbarActions();
  initBot();
  initModal();
  revealOnScroll();
  initMenu();
  navSpy();
  initCursor();
  initTrailCanvas();
  initCodeRain();
  initTiltCards();
  initMagnetic();
}

document.addEventListener('DOMContentLoaded', boot);
