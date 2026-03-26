function trocarPagina(pagina) {
  const content = document.getElementById("content");

  if (pagina === "inicio") {
    content.innerHTML = `
      <div class="card">
        <h2>Bem-vindo 👋</h2>
        <p>Este é seu guia acadêmico digital.</p>
      </div>

      <div class="card">
        <h3>Resumo</h3>
        <p>Aqui você organiza conteúdos e estudos.</p>
      </div>
    `;
  }

  if (pagina === "materiais") {
    content.innerHTML = `
      <div class="card">
        <h2>Materiais</h2>
        <p>Adicione PDFs, links e conteúdos.</p>
      </div>
    `;
  }

  if (pagina === "cursos") {
    content.innerHTML = `
      <div class="card">
        <h2>Cursos</h2>
        <p>Organize seus cursos aqui.</p>
      </div>
    `;
  }
}

// carregar inicial
trocarPagina("inicio");
