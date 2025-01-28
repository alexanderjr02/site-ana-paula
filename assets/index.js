// Seleciona a seção que terá o background alterado
const section = document.querySelector('.home-do-site');

// Array com os caminhos das imagens (loja1, loja2, etc.)
const imagens = [
    'assets/img/loja2.png', 'assets/img/loja1.png', 
    'assets/img/loja3.png', 'assets/img/loja4.png'
];

// Tempo entre as trocas (em milissegundos)
const intervaloTroca = 3000; // 3 segundos

// Variável para rastrear o índice atual
let indiceAtual = 0;

// Função para alterar o background
function trocarImagem() {
    // Definindo o linear gradient
    const gradiente = 'linear-gradient(#633F3699, #633F3699)';

    // Sempre aplicando o linear-gradient com 100% de cobertura
    if (window.innerWidth <= 1170) {
        // Quando a tela for menor ou igual a 1170px, troca entre as 4 imagens
        section.style.backgroundImage = `
            ${gradiente}, 
            url(${imagens[indiceAtual]})
        `;
        section.style.backgroundSize = '100% 100%'; // A imagem ocupa 100% da tela
        section.style.backgroundPosition = 'center'; // Centraliza a imagem
        section.style.backgroundRepeat = 'no-repeat'; // Impede repetição
    } else {
        // Quando a tela for maior que 1170px, as imagens devem ser aplicadas em duas partes
        const imagem1 = imagens[indiceAtual % imagens.length]; // A primeira imagem
        const imagem2 = imagens[(indiceAtual + 1) % imagens.length]; // A próxima imagem

        section.style.backgroundImage = `
            ${gradiente}, 
            url(${imagem1}),
            url(${imagem2})
        `;
        section.style.backgroundSize = '100% 100%, 50% auto, 50% auto'; // Cada imagem ocupa 50% da tela
        section.style.backgroundPosition = 'left top 50px, right top 50px'; // Posiciona as imagens uma à esquerda e outra à direita
        section.style.backgroundRepeat = 'no-repeat'; // Impede repetição
    }

    // Atualiza o índice da próxima transição
    indiceAtual = (indiceAtual + 1) % imagens.length; // Se atingir o final, volta ao início
}

// Chama a função pela primeira vez para exibir a imagem inicial
trocarImagem();

// Configura o intervalo para alternar automaticamente
setInterval(trocarImagem, intervaloTroca);

// Adiciona um ouvinte de evento para ajustar o fundo quando a janela for redimensionada
window.addEventListener('resize', trocarImagem);
