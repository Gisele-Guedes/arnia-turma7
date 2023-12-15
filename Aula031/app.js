function carregarEstilo() {
    document.getElementById('estilos').classList.add('estilo-carregado');
    document.querySelectorAll('p').forEach(paragrafo => {
        paragrafo.classList.add('estilo-carregado');
    });

    document.querySelectorAll('p:nth-child(1), p:nth-child(2)').forEach(paragrafo => {
        paragrafo.classList.add('paragrafo-lado-a-lado');
    });
}

function alternarDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Caso o dark mode esteja ativado, remove o estilo-carregado
    if (body.classList.contains('dark-mode')) {
        document.getElementById('estilos').classList.remove('estilo-carregado');
        document.querySelectorAll('p').forEach(paragrafo => {
            paragrafo.classList.remove('estilo-carregado', 'paragrafo-lado-a-lado');
        });
    }
}