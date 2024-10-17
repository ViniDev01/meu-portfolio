document.addEventListener('DOMContentLoaded', function () {
    const btnTop = document.getElementById('btnTop');

    // Exibir/ocultar o botão de voltar ao topo com base na rolagem
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            btnTop.style.opacity = '1';  // Exibe o botão
        } else {
            btnTop.style.opacity = '0';  // Oculta o botão
        }
    });

    // Função personalizada para scroll suave
    function scrollToTop(duration) {
        const start = window.pageYOffset;
        const startTime = performance.now();

        function animateScroll(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const ease = easeInOutQuad(progress); // Função de easing
            window.scrollTo(0, start * (1 - ease));

            if (elapsedTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }

    // Função de easing para suavizar a animação
    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    // Ao clicar no botão, chamar a função personalizada de scroll suave
    btnTop.addEventListener('click', function () {
        scrollToTop(500);  // 500ms de duração para rolar ao topo
    });

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
    //----------------------------------


    // Pega o modal
    var modal = document.getElementById("myModal");

    // Pega o elemento que fecha o modal
    var spans = document.getElementsByClassName("close")[0];

    // Adiciona eventos de clique nas imagens do projeto
    var projectLinks = document.querySelectorAll(".link-image");

    var projectOlharLinks = document.querySelectorAll(".olhar-link");

    // Array de projetos (exemplo)
    var projetos = [
        {
            nome: "Projeto para E-commerce",
            descricao: "Descrição do Projeto 1.",
            url: "https://www.seusite1.com" // URL do projeto
        },
        {
            nome: "Projeto para Pizzaria",
            descricao: "Descrição do Projeto 2.",
            url: "https://www.seusite2.com" // URL do projeto
        },
        {
            nome: "Projeto para Confeitaria",
            descricao: "Descrição do Projeto 3.",
            url: "https://vinidev01.github.io/projeto-para-confeitaria/" // URL do projeto
        }
    ];

    // Adiciona eventos de clique nas imagens do projeto
    projectLinks.forEach((link, index) => {
        link.onclick = function (event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            modal.style.display = "block"; // Exibe o modal

            // Carrega o conteúdo do projeto no modal
            var projeto = projetos[index]; // Usa o índice do link
            modal.querySelector("#modal-title").innerText = projeto.nome; // Define o nome do projeto
            modal.querySelector("#modal-description").innerText = projeto.descricao; // Define a descrição do projeto
            modal.querySelector("#modal-iframe").src = projeto.url; // Define a URL do projeto
        }
    });

    projectOlharLinks.forEach((link, index) => {
        link.onclick = function (event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            modal.style.display = "block"; // Exibe o modal

            // Carrega o conteúdo do projeto no modal
            var projeto = projetos[index]; // Usa o índice do link
            modal.querySelector("#modal-title").innerText = projeto.nome; // Define o nome do projeto
            modal.querySelector("#modal-description").innerText = projeto.descricao; // Define a descrição do projeto
            modal.querySelector("#modal-iframe").src = projeto.url; // Define a URL do projeto
        }
    });

    // Quando o usuário clica no botão de fechar, feche o modal
    spans.onclick = function () {
        modal.style.display = "none";
        modal.querySelector("#modal-iframe").src = ""; // Limpa a URL do iframe
    }

    // Quando o usuário clica fora do modal, feche o modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modal.querySelector("#modal-iframe").src = ""; // Limpa a URL do iframe
        }
    }

});
