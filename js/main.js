// NexoTech — Lógica do front-end (lista + post individual)
(function () {
  // Renderiza o grid de posts na homepage
  function renderGrid() {
    const grid = document.getElementById('post-grid');
    if (!grid) return;
    const sorted = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
    grid.innerHTML = sorted.map(post => `
      <article class="card">
        ${post.image ? `<img class="card-media" src="${post.image}" alt="${post.imageAlt || post.title}" loading="lazy">` : ''}
        <div class="card-body">
          <span class="card-cat">${post.category}</span>
          <h3 class="card-title"><a href="post.html?slug=${post.slug}" style="color:inherit;text-decoration:none;">${post.title}</a></h3>
          <p class="card-excerpt">${post.excerpt}</p>
          <div class="card-foot">
            <span class="card-date">${formatDate(post.date)}</span>
            <a class="card-source" href="${post.sourceUrl}" target="_blank" rel="noopener">Fonte</a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Renderiza um post individual
  function renderPost() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    const post = POSTS.find(p => p.slug === slug);
    if (!post) {
      document.getElementById('post-content').innerHTML = '<p>Conteúdo não encontrado.</p>';
      return;
    }
    document.title = `${post.title} — NexoTech`;
    document.getElementById('post-content').innerHTML = `
      <a class="back-link" href="index.html">← Voltar</a>
      ${post.image ? `<img class="post-cover" src="${post.image}" alt="${post.imageAlt || post.title}">` : ''}
      <h1>${post.title}</h1>
      <p class="post-meta">${post.category} &nbsp;•&nbsp; ${formatDate(post.date)}</p>
      ${post.body.map(p => `<p>${p}</p>`).join('')}
      <div class="post-source-box">
        <strong>Fonte:</strong> <a href="${post.sourceUrl}" target="_blank" rel="noopener">${post.source}</a>
      </div>
    `;
  }

  function formatDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  if (document.getElementById('post-grid')) renderGrid();
  if (document.getElementById('post-content')) renderPost();
})();
