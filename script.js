const empresas = [
    {
        categoria: 'lojas-de-celulares',
        logo: 'https://i.postimg.cc/xCGs2h7r/logoalfa.png',
        descricao: 'Alfa Prime',
        palavrasChave: ['loja','celular', 'assistência', 'conserto de celular', 'loja de celular', 'manutenção de smartphone', 'reparo de telefone', 'assistência técnica', 'troca de tela', 'loja de smartphones', 'loja de acessórios para celular', 'conserto de iPhone', 'reparo de Android', 'troca de bateria', 'tela quebrada', 'loja de eletrônicos', 'acessórios para celular', 'recarga de celular', 'desbloqueio de celular', 'reparo urgente de celular', 'celulares usados'],
        whatsapp: 'https://wa.me/5517999740086',
        instagram: 'https://instagram.com/alfa.prime_',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/alfaprime+guaira+sp/@-20.3228136,-48.3131217,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409'
    },
    {
        categoria: 'restaurantes',
        logo: 'https://i.postimg.cc/pTLXHbG4/logoescarpas.png',
        descricao: 'Escarpas Sushi Bar',
        palavrasChave: ['sushi', 'comida japonesa', 'restaurante', 'comida', 'japones'],
        whatsapp: 'https://wa.me/5511999999999',
        instagram: 'https://instagram.com/loja2',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/escarpas+sushi+bar+guaira+sp/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409'
    },
    // Emergências
    {
        categoria: 'emergencias',
        logo: 'img/logosamu.png',
        descricao: 'SAMU (Serviço de Atendimento Móvel de Urgência)',
        telefone: 'tel:+55192',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/SAMU+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['emergência', 'saúde', 'urgência', 'ambulância', 'SAMU']
    },
    {
        categoria: 'emergencias',
        logo: 'img/logopm.png',
        descricao: 'Polícia Militar',
        telefone: 'tel:+55190',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Polícia+Militar+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['polícia', 'segurança', 'emergência', 'crime', '190']
    },
    {
        categoria: 'emergencias',
        logo: 'img/logocb.png',
        descricao: 'Corpo de Bombeiros',
        telefone: 'tel:+55193',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Corpo+de+Bombeiros+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['bombeiros', 'incêndio', 'resgate', 'emergência', '193']
    },
    {
        categoria: 'emergencias',
        logo: 'img/logodefesacivil.png',
        descricao: 'Defesa Civil',
        telefone: 'tel:551733312280',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Defesa+Civil+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['defesa civil', 'emergência', 'calamidade', 'desastres naturais', 'proteção']
    },
    
    // Saúde
    {
        categoria: 'santa-casa',
        logo: 'img/logosantacasa.png',
        descricao: 'Santa Casa de Guaíra',
        telefone: 'tel:551733300220',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Santa+Casa+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['hospital', 'saúde', 'atendimento médico', 'internação', 'Santa Casa']
    },
    {
        categoria: 'ubs',
        logo: 'img/logoubs.png',
        descricao: 'UBS "Dr. João Bosco Lelis" (Centro)',
        telefone: 'tel:551733315941',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/UBS+Dr.+João+Bosco+Lelis+Centro/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['UBS', 'posto de saúde', 'atendimento básico', 'saúde', 'Centro']
    },
    {
        categoria: 'ubs',
        logo: 'img/logoubs.png',
        descricao: 'UBS "Dr. Orlando Garcia Junqueira" (Vila Aparecida)',
        telefone: 'tel:551733312904',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/UBS+Dr.+Orlando+Garcia+Junqueira+Vila+Aparecida/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['UBS', 'posto de saúde', 'saúde', 'atendimento básico', 'Vila Aparecida']
    },
    {
        categoria: 'ubs',
        logo: 'img/logoubs.png',
        descricao: 'UBS "José Adalberto Lelis Garcia" (Vila Camacho)',
        telefone: 'tel:551733314926',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/UBS+José+Adalberto+Lelis+Garcia+Vila+Camacho/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['UBS', 'posto de saúde', 'atendimento médico', 'saúde', 'Vila Camacho']
    },
    {
        categoria: 'ubs',
        logo: 'img/logoubs.png',
        descricao: 'UBS "Anna Diniz Junqueira" (Tonico Garcia)',
        telefone: 'tel:551733322455',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/UBS+Anna+Diniz+Junqueira+Tonico+Garcia/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['UBS', 'posto de saúde', 'atendimento básico', 'saúde', 'Tonico Garcia']
    },
    
    // Prefeitura e Secretarias
    {
        categoria: 'prefeitura',
        logo: 'img/logoguaira.png',
        descricao: 'Prefeitura Municipal de Guaíra',
        telefone: 'tel:551733325100',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Prefeitura+Municipal+de+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['prefeitura', 'administração pública', 'governo', 'serviços públicos', 'Guaíra']
    },
    {
        categoria: 'secretarias',
        logo: 'img/logoguaira.png',
        descricao: 'Secretaria Municipal de Saúde',
        telefone: 'tel:551733325121',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Secretaria+Municipal+de+Saude+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['saúde', 'administração', 'secretaria', 'serviços públicos', 'saúde pública']
    },
    {
        categoria: 'secretarias',
        logo: 'img/logoguaira.png',
        descricao: 'Secretaria Municipal de Educação',
        telefone: 'tel:551733315863',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Secretaria+Municipal+de+Educacao+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['educação', 'escolas', 'administração pública', 'secretaria', 'Guaíra']
    },
    {
        categoria: 'secretarias',
        logo: 'img/logoguaira.png',
        descricao: 'Secretaria de Assistência Social',
        telefone: 'tel:551733325105',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Secretaria+de+Assistência+Social+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['assistência social', 'secretaria', 'ajuda social', 'serviços públicos', 'Guaíra']
    },
    {
        categoria: 'secretarias',
        logo: 'img/logoguaira.png',
        descricao: 'Secretaria de Obras e Serviços Públicos',
        telefone: 'tel:551733325100',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Secretaria+de+Obras+e+Serviços+Públicos+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['obras públicas', 'infraestrutura', 'serviços públicos', 'administração', 'Guaíra']
    },
    {
        categoria: 'secretarias',
        logo: 'img/logoguaira.png',
        descricao: 'Secretaria Municipal de Agricultura, Abastecimento e Meio Ambiente',
        telefone: 'tel:551733326198',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Secretaria+Municipal+de+Agricultura+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['agricultura', 'meio ambiente', 'administração pública', 'abastecimento', 'Guaíra']
    },
    {
        categoria: 'secretarias',
        logo: 'img/logoguaira.png',
        descricao: 'Secretaria de Desenvolvimento Econômico',
        telefone: 'tel:551733325125',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Secretaria+de+Desenvolvimento+Econômico+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['desenvolvimento', 'economia', 'serviços públicos', 'administração', 'Guaíra']
    },
    {
        categoria: 'secretarias',
        logo: 'img/logoguaira.png',
        descricao: 'Departamento de Recursos Humanos',
        telefone: 'tel:551733325129',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Departamento+de+Recursos+Humanos+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['recursos humanos', 'RH', 'administração pública', 'emprego', 'Guaíra']
    },
    {
        categoria: 'secretarias',
        logo: 'img/logoguaira.png',
        descricao: 'Setor de Tributação (Impostos e Taxas)',
        telefone: 'tel:551733325112',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Setor+de+Tributação+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['tributação', 'impostos', 'administração pública', 'taxas', 'Guaíra']
    },
    {
        categoria: 'secretarias',
        logo: 'img/logoguaira.png',
        descricao: 'Protocolo Geral',
        telefone: 'tel:551733325127',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Protocolo+Geral+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['protocolo', 'documentos', 'administração pública', 'serviços públicos', 'Guaíra']
    },
    {
        categoria: 'secretarias',
        logo: 'img/logoguaira.png',
        descricao: 'Vigilância Sanitária',
        telefone: 'tel:551733316480',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Vigilância+Sanitária+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['vigilância sanitária', 'saúde pública', 'segurança sanitária', 'higiene', 'Guaíra']
    },
    {
        categoria: 'secretarias',
        logo: 'img/logoguaira.png',
        descricao: 'Ouvidoria Municipal',
        telefone: 'tel:551733325100',
        localizacao: 'https://www.google.com/maps/dir/-20.3259904,-48.3098624/Ouvidoria+Municipal+Guaira+SP/@-20.3228136,-48.3131217,17z/data=!4m8!4m7!1m5!1m1!1s0x94bb0b3681938c29:0x960fd922f71e6377!2m2!1d-48.3112183!2d-20.3196409',
        palavrasChave: ['ouvidoria', 'reclamações', 'administração pública', 'serviços públicos', 'Guaíra']
    }
    
    
    
    // Adicione mais empresas aqui
];

const listaEmpresas = document.getElementById('lista-empresas');

// Função para filtrar empresas por categoria
function exibirEmpresas(categoria) {
    listaEmpresas.innerHTML = ''; // Limpa a lista atual
    empresas.filter(empresa => empresa.categoria === categoria).forEach(empresa => {
        const empresaDiv = document.createElement('div');
        empresaDiv.classList.add('empresa');

        // Verifica se a empresa tem WhatsApp
        let whatsappButton = empresa.whatsapp ? `<a href="${empresa.whatsapp}" target="_blank"><button><i class="fab fa-whatsapp"></i></button></a>` : '';
        let instagramButton = empresa.instagram ? `<a href="${empresa.instagram}" target="_blank"><button><i class="fab fa-instagram"></i></button></a>` : '';
        let telefoneButton = empresa.telefone ? `<a href="tel:${empresa.telefone}" target="_blank"><button><i class="fas fa-phone"></i></button></a>` : '';

        empresaDiv.innerHTML = `
            <img src="${empresa.logo}" alt="Logo da empresa" />
            <p>${empresa.descricao}</p>
            <div class="botoes">
                ${whatsappButton}
                ${instagramButton}
                ${telefoneButton}
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

    // Verifica se a empresa tem WhatsApp
    let whatsappButton = empresa.whatsapp ? `<a href="${empresa.whatsapp}" target="_blank"><button><i class="fab fa-whatsapp"></i></button></a>` : '';
    let instagramButton = empresa.instagram ? `<a href="${empresa.instagram}" target="_blank"><button><i class="fab fa-instagram"></i></button></a>` : '';
    let telefoneButton = empresa.telefone ? `<a href="tel:${empresa.telefone}" target="_blank"><button><i class="fas fa-phone"></i></button></a>` : '';

    empresaDiv.innerHTML = `
        <img src="${empresa.logo}" alt="Logo da empresa" />
        <p>${empresa.descricao}</p>
        <div class="botoes">
            ${whatsappButton}
            ${instagramButton}
            ${telefoneButton}
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

            // Verifica se a empresa tem WhatsApp
            let whatsappButton = empresa.whatsapp ? `<a href="${empresa.whatsapp}" target="_blank"><button><i class="fab fa-whatsapp"></i></button></a>` : '';
            let instagramButton = empresa.instagram ? `<a href="${empresa.instagram}" target="_blank"><button><i class="fab fa-instagram"></i></button></a>` : '';
            let telefoneButton = empresa.telefone ? `<a href="tel:${empresa.telefone}" target="_blank"><button><i class="fas fa-phone"></i></button></a>` : '';

            empresaDiv.innerHTML = `
                <img src="${empresa.logo}" alt="Logo da empresa" />
                <p>${empresa.descricao}</p>
                <div class="botoes">
                    ${whatsappButton}
                    ${instagramButton}
                    ${telefoneButton}
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



