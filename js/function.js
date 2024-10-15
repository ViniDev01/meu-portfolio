// Função para animar o scroll quando a página rola
const scrollAnima = document.querySelector('[data-anima="scroll"]');
const metadeWindow = window.innerHeight * 2.5;  // Ajuste conforme necessário

function animarScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top;
    const itemVisivel = topoItem - metadeWindow < 0;

    if (itemVisivel) {
        scrollAnima.classList.add('show-button');
    } else {
        scrollAnima.classList.remove('show-button');
    }
}

window.addEventListener('scroll', animarScroll);

// Seleciona apenas o primeiro link interno com data-scroll="suave"
const linkInterno = document.querySelector('[data-scroll="suave"] a[href^="#"]');

function scrollTop(event) {
    event.preventDefault();  // Previne o comportamento padrão do link

    const href = event.currentTarget.getAttribute('href');
    const topo = document.querySelector(href);

    if (topo) {
        topo.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
}

// Adiciona o evento de clique para scroll suave ao primeiro link interno
if (linkInterno) {
    linkInterno.addEventListener('click', scrollTop);
}

// FIM DA FUNÇÃO SCROLL TOP

// Seleciona o elemento div-fix
const content = document.querySelector('[data-shrink="yes"]');

// Seleciona o span dentro do elemento content
const span = content.querySelector('span');

// Adiciona a classe "aparecer" ao span imediatamente
span.classList.add('aparecer');

// Alterna a classe "shrink" para o content a cada 5 segundos
setInterval(function () {
    content.classList.toggle('shrink');
}, 5000);

// Aguarda 200ms e então alterna a classe "aparecer" no span a cada 5 segundos
setTimeout(function () {
    setInterval(function () {
        span.classList.toggle('aparecer');
    }, 5000);
}, 100);

//FIM DA FUNÇÃO DE WHATSAPP

let body = document.querySelector('body');
let modoClaro = body.querySelector('[data-modo="claro"]');

modoClaro.onclick = function () {
    if (body.classList.contains('modoClaro')) {
        body.classList.remove('modoClaro');
        body.classList.add('modoEscuro');
        modoClaro.src = "img/img-icons/brilho.png"; // Altere para a imagem do modo escuro
    } else {
        body.classList.remove('modoEscuro');
        body.classList.add('modoClaro');
        modoClaro.src = "img/img-icons/eclipse-alt.png"; // Altere para a imagem do modo claro
    }
};

//FIM DA FUNÇÃO PARA COLOCAR NO MODO CLARO E ESCURO


let carregarMais = document.querySelector('#carregarMais');
let currentItem = 3; // Inicialmente, 3 itens estão visíveis

// Função para carregar mais linhas
carregarMais.onclick = () => {
    let linhas = [...document.querySelectorAll('.corpo-categoria .linha')];
    let totalLinhas = linhas.length;

    // Mostra mais linhas, até 3 ou o restante das linhas disponíveis
    for (let i = currentItem; i < currentItem + 3 && i < totalLinhas; i++) {
        linhas[i].style.display = 'flex';
    }

    // Atualiza o número atual de itens visíveis
    currentItem += 3;

    // Se todas as linhas estiverem visíveis, esconde o botão "Carregar mais"
    if (currentItem >= totalLinhas) {
        carregarMais.style.display = 'none';
    }
};





