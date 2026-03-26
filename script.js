function trocarPagina(pagina) {
  const content = document.getElementById("content");

  if (pagina === "inicio") {
    content.innerHTML = `
      <h1>Início</h1>
      <p>Bem-vindo ao guia acadêmico.</p>
    `;
  }

  if (pagina === "materiais") {
    content.innerHTML = `
      <h1>Materiais</h1>
      <p>Aqui ficam seus conteúdos.</p>
    `;
  }

  if (pagina === "cursos") {
    content.innerHTML = `
      <h1>Cursos</h1>
      <p>Lista de cursos disponíveis.</p>
    `;
  }
}
