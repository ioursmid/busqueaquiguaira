const empresas = [
    {
        categoria: 'lojas-de-celulares',
        logo: 'https://i.postimg.cc/xCGs2h7r/logoalfa.png',
        descricao: 'Alfa Prime',
        palavrasChave: ['loja','celular', 'assistência', 'conserto de celular', 'loja de celular', 'manutenção de smartphone', 'reparo de telefone', 'assistência técnica', 'troca de tela', 'loja de smartphones', 'loja de acessórios para celular', 'conserto de iPhone', 'reparo de Android', 'troca de bateria', 'tela quebrada', 'loja de eletrônicos', 'acessórios para celular', 'recarga de celular', 'desbloqueio de celular', 'reparo urgente de celular', 'celulares usados' ],
        whatsapp: 'https://wa.me/5517999740086',
        instagram: 'https://instagram.com/alfa.prime_',
        localizacao: 'https://maps.app.goo.gl/jE7zd7NKHJ5E4W7F6'
    },
    {
        categoria: 'restaurantes',
        logo: 'https://i.postimg.cc/pTLXHbG4/logoescarpas.png',
        descricao: 'Escarpas Sushi Bar',
        palavrasChave: ['sushi', 'comida japonesa', 'restaurante', 'comida', 'japones'],
        whatsapp: 'https://wa.me/5511999999999',
        instagram: 'https://instagram.com/loja2',
        localizacao: 'https://goo.gl/maps/exemplo2'
    },
    // Adicione mais empresas aqui
];

const listaEmpresas = document.getElementById('lista-empresas');

// Função para filtrar empresas por categoria
function exibirEmpresas(categoria) {
    listaEmpresas.innerHTML = ''; // Limpa a lista atual
    empresas.filter(empresa => empresa.categoria === categoria).forEach(empresa => {
        const empresaDiv = document.createElement('div');
        empresaDiv.classList.add('empresa');

        empresaDiv.innerHTML = `
            <img src="${empresa.logo}" alt="Logo da empresa" />
            <p>${empresa.descricao}</p>
            <div class="botoes">
                <a href="${empresa.whatsapp}" target="_blank"><button><i class="fab fa-whatsapp"></i></button></a>
                <a href="${empresa.instagram}" target="_blank"><button><i class="fab fa-instagram"></i></button></a>
                <a href="${empresa.localizacao}" target="_blank"><button><i class="fas fa-map-marker-alt"></i></button></a>
             </div>
        `;

        listaEmpresas.appendChild(empresaDiv);
    });
}

// Exibir todas as empresas inicialmente
empresas.forEach(empresa => {
    const empresaDiv = document.createElement('div');
    empresaDiv.classList.add('empresa');

    empresaDiv.innerHTML = `
        <img src="${empresa.logo}" alt="Logo da empresa" />
        <p>${empresa.descricao}</p>
        <div class="botoes">
                <a href="${empresa.whatsapp}" target="_blank"><button><i class="fab fa-whatsapp"></i></button></a>
                <a href="${empresa.instagram}" target="_blank"><button><i class="fab fa-instagram"></i></button></a>
                <a href="${empresa.localizacao}" target="_blank"><button><i class="fas fa-map-marker-alt"></i></button></a>
        </div>
    `;

    listaEmpresas.appendChild(empresaDiv);
});


function buscarEmpresa() {
    const termoBusca = document.getElementById('search-input').value.toLowerCase();
    listaEmpresas.innerHTML = ''; // Limpa a lista atual
    const categorias = document.querySelector('.categorias'); // Seleciona o elemento de categorias

    const resultados = empresas.filter(empresa =>
        empresa.descricao.toLowerCase().includes(termoBusca) || 
        empresa.categoria.toLowerCase().includes(termoBusca) ||
        empresa.palavrasChave.some(palavra => palavra.toLowerCase().includes(termoBusca))
    );

    if (resultados.length > 0) {
        categorias.style.display = 'none'; // Esconde as categorias
        resultados.forEach(empresa => {
            const empresaDiv = document.createElement('div');
            empresaDiv.classList.add('empresa');

            empresaDiv.innerHTML = `
                <img src="${empresa.logo}" alt="Logo da empresa" />
                <p>${empresa.descricao}</p>
                <div class="botoes">
                    <a href="${empresa.whatsapp}" target="_blank"><button><i class="fab fa-whatsapp"></i></button></a>
                    <a href="${empresa.instagram}" target="_blank"><button><i class="fab fa-instagram"></i></button></a>
                    <a href="${empresa.localizacao}" target="_blank"><button><i class="fas fa-map-marker-alt"></i></button></a>
                </div>
            `;

            listaEmpresas.appendChild(empresaDiv);
        });
    } else {
        categorias.style.display = 'none'; // Esconde as categorias
        listaEmpresas.innerHTML = '<p>Nenhuma empresa encontrada.</p>';
    }
}



function mostrarSomenteCategorias() {
    const categorias = document.querySelector('.categorias');
    categorias.style.display = ''; // Mostra as categorias novamente
    listaEmpresas.innerHTML = ''; // Limpa os resultados da busca
}



