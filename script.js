document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    // Simulação do conteúdo que estava no seu Guia
    const content = `
        <header style="padding: 40px 20px; text-align: center;">
            <h1>Guia de Solicitações Acadêmicas</h1>
            <p>Informações completas para sua jornada estudantil.</p>
        </header>

        <main style="max-width: 800px; margin: 0 auto; padding: 20px;">
            <section id="trancamento" class="card">
                <h2>Trancamento de Matrícula</h2>
                <p>Informações sobre prazos e como proceder com a solicitação oficial.</p>
                <a href="#" class="button-primary">Solicitar Agora</a>
            </section>

            <section id="estudos" class="card">
                <h2>Aproveitamento de Estudos</h2>
                <p>Saiba como validar disciplinas cursadas em outras instituições.</p>
            </section>

            <section id="faltas" class="card">
                <h2>Justificativa de Faltas</h2>
                <p>Regras para apresentação de atestados e reposição de atividades.</p>
            </section>
        </main>
    `;

    root.innerHTML = content;
});
