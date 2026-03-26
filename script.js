document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    // Dados do Guia Acadêmico (Conteúdo extraído do original)
    const guiaData = {
        titulo: "Guia de Solicitações Acadêmicas",
        descricao: "Uma página interativa com informações completas sobre sua vida acadêmica.",
        secoes: [
            {
                id: "trancamento",
                titulo: "Trancamento de Matrícula",
                texto: "O trancamento interrompe temporariamente seus estudos, mantendo seu vínculo com a instituição dentro dos prazos regulamentares.",
                link: "#"
            },
            {
                id: "aproveitamento",
                titulo: "Aproveitamento de Estudos",
                texto: "Permite validar componentes curriculares cursados anteriormente em outras instituições ou cursos.",
                link: "#"
            },
            {
                id: "faltas",
                titulo: "Justificativa de Faltas",
                texto: "Procedimento para apresentar atestados médicos ou documentos que comprovem a impossibilidade de comparecimento às atividades.",
                link: "#"
            },
            {
                id: "documentos",
                titulo: "Emissão de Documentos",
                texto: "Solicite declarações de matrícula, históricos escolares e outros documentos acadêmicos oficiais.",
                link: "#"
            }
        ]
    };

    // Função para gerar o HTML das seções
    const renderContent = () => {
        return `
            <div class="container">
                <header style="text-align: center; margin-bottom: 50px;">
                    <h1>${guiaData.titulo}</h1>
                    <p style="font-size: 1.1rem; max-width: 600px; margin: 0 auto;">${guiaData.descricao}</p>
                </header>

                <main>
                    ${guiaData.secoes.map(secao => `
                        <section id="${secao.id}" class="card">
                            <h2>${secao.titulo}</h2>
                            <p>${secao.texto}</p>
                            <div style="margin-top: 20px; display: flex; justify-content: flex-end;">
                                <a href="${secao.link}" class="button-primary">Acessar Informações</a>
                            </div>
                        </section>
                    `).join('')}
                </main>

                <footer style="text-align: center; margin-top: 60px; padding: 20px; color: var(--text-tertiary); font-size: 0.8rem;">
                    <p>© 2026 Portal Acadêmico Independente</p>
                </footer>
            </div>
        `;
    };

    // Injeta o conteúdo no HTML
    root.innerHTML = renderContent();
});
