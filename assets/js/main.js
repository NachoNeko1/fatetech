(() => {
  const body = document.body;
  const themeButton = document.getElementById('theme-toggle');
  const searchToggle = document.getElementById('search-toggle');
  const searchPanel = document.getElementById('search-panel');
  const searchInput = document.getElementById('search-input');
  const clearButton = document.getElementById('search-clear');
  const grid = document.getElementById('article-grid');
  const empty = document.getElementById('empty-state');
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav');

  const savedTheme = localStorage.getItem('fate-blog-theme');
  if (savedTheme === 'dark' || (!savedTheme && matchMedia('(prefers-color-scheme: dark)').matches)) body.classList.add('dark');
  themeButton?.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('fate-blog-theme', body.classList.contains('dark') ? 'dark' : 'light');
  });
  searchToggle?.addEventListener('click', () => {
    searchPanel.hidden = !searchPanel.hidden;
    if (!searchPanel.hidden) searchInput.focus();
  });
  const filter = () => {
    const q = (searchInput.value || '').trim().toLowerCase();
    let visible = 0;
    grid.querySelectorAll('.article-card').forEach(card => {
      const show = card.textContent.toLowerCase().includes(q);
      card.hidden = !show;
      if (show) visible++;
    });
    empty.hidden = visible !== 0;
  };
  searchInput?.addEventListener('input', filter);
  clearButton?.addEventListener('click', () => { searchInput.value = ''; filter(); searchInput.focus(); });
  menuButton?.addEventListener('click', () => nav.classList.toggle('open'));
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
})();
