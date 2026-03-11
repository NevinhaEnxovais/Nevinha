/* ===================================================
   1. VARIÁVEIS GLOBAIS E INICIALIZAÇÃO
   =================================================== */
let carrinho = [];
let total = 0;
let currentSlide = 0;
let autoPlayTimer;

// Inicialização Geral
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();       // Mostra todos os produtos ao abrir
    iniciarPassagemAutomatica(); // Inicia o banner
    
    // Configura os filtros das "bolinhas" de categoria
    const filtros = document.querySelectorAll('.cat-item');
    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            const categoria = filtro.getAttribute('data-filter');
            filtros.forEach(f => f.classList.remove('ativo'));
            filtro.classList.add('ativo');
            filtrar(categoria);
        });
    });

    // Configura a busca ao apertar "Enter"
    const inputBusca = document.getElementById('inputBuscaNova');
    if (inputBusca) {
        inputBusca.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') buscarProdutoNovo();
        });
    }
});

/* ===================================================
   2. SISTEMA DE VITRINE E FILTRAGEM
   =================================================== */

// Função mestre que desenha os produtos na tela
function renderizarProdutos(listaParaExibir = listaProdutos) {
    const vitrine = document.querySelector('.vitrine');
    if (!vitrine) return;
    
    vitrine.innerHTML = ""; 

    if (listaParaExibir.length === 0) {
        vitrine.innerHTML = "<p style='grid-column: 1/-1; text-align: center; padding: 50px;'>Nenhum produto encontrado.</p>";
        return;
    }

    listaParaExibir.forEach(produto => {
        const cardHTML = `
            <div class="card" data-categoria="${produto.categoria}">
                <div class="foto-produto">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="detalhes">
                    <h3>${produto.nome}</h3>
                    <p style="font-size: 11px; color: #666; margin-bottom: 5px;">${produto.descricao}</p>
                    <p>R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                    <div class="controle-qtd" style="display: flex; align-items: center; justify-content: center; gap: 15px; margin: 10px 0;">
                        <button type="button" onclick="alterarQtdNoCard(this, -1)" style="width: 30px; height: 30px; border-radius: 50%; border: 1px solid #ccc; cursor: pointer; background: #f8f8f8; font-weight: bold;">-</button>
                        <span class="qtd-numero" style="font-weight: bold; font-size: 16px;">1</span>
                        <button type="button" onclick="alterarQtdNoCard(this, 1)" style="width: 30px; height: 30px; border-radius: 50%; border: 1px solid #ccc; cursor: pointer; background: #f8f8f8; font-weight: bold;">+</button>
                    </div>
                    <button class="btn-comprar" onclick="adicionarComQtd(this, '${produto.nome}', ${produto.preco})">
                        🛒 ADICIONAR AO CARRINHO
                    </button>
                </div>
            </div>
        `;
        vitrine.innerHTML += cardHTML;
    });
}

// Filtro por Categoria (Usado pelas bolinhas e menu lateral)
function filtrar(categoria) {
    if (categoria === 'tudo') {
        renderizarProdutos(listaProdutos);
    } else {
        const filtrados = listaProdutos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
        renderizarProdutos(filtrados);
    }
}

function filtrarPeloMenu(categoria) {
    filtrar(categoria);
    toggleMenu(); // Fecha o menu lateral após clicar
}

// Filtro por Texto (Barra de Pesquisa)
<div class="busca-central">
    <input type="text" id="inputBuscaNova" placeholder="ENCONTRE AQUI" onkeyup="buscarProdutoNovo()">
    <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="Lupa" onclick="buscarProdutoNovo()">
</div>

/* ===================================================
   3. CARRINHO DE COMPRAS
   =================================================== */

function alterarQtdNoCard(botao, mudanca) {
    const numeroSpan = botao.parentElement.querySelector('.qtd-numero');
    let qtdAtual = parseInt(numeroSpan.innerText);
    qtdAtual += mudanca;
    if (qtdAtual < 1) qtdAtual = 1; 
    numeroSpan.innerText = qtdAtual;
}

function adicionarComQtd(botao, nome, preco) {
    const card = botao.closest('.card');
    const qtd = parseInt(card.querySelector('.qtd-numero').innerText);
    
    for(let i = 0; i < qtd; i++) {
        adicionarAoCarrinho(nome, preco);
    }
    
    card.querySelector('.qtd-numero').innerText = "1"; // Reseta contador do card
    alert(`${qtd}x ${nome} adicionado ao carrinho!`);
}

function adicionarAoCarrinho(nome, preco) {
    const itemExistente = carrinho.find(item => item.nome === nome);
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }
    total += preco;
    atualizarInterface();
}

function atualizarInterface() {
    const contador = document.getElementById('contagem-carrinho');
    if (contador) {
        const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
        contador.innerText = totalItens;
    }
}

function abrirModal() {
    const lista = document.getElementById('itens-carrinho');
    const valorTotalDisplay = document.getElementById('valor-total');
    const modal = document.getElementById('modal-carrinho');

    lista.innerHTML = '';
    carrinho.forEach((item) => {
        lista.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">
                <div style="text-align:left;">
                    <span style="display:block; font-weight:bold;">${item.nome}</span>
                    <small>${item.quantidade}x R$ ${item.preco.toFixed(2)}</small>
                </div>
                <span style="font-weight:bold;">R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
            </div>`;
    });

    valorTotalDisplay.innerText = total.toFixed(2).replace('.', ',');
    modal.style.display = "block";
}

function fecharModal() { document.getElementById('modal-carrinho').style.display = "none"; }

function enviarPedido() {
    if (carrinho.length === 0) return alert("Carrinho vazio!");
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    localStorage.setItem('totalCarrinho', total.toString());
    window.location.href = "finalizar.html";
}

function limparCarrinho() {
    if (confirm("Deseja esvaziar o carrinho?")) {
        carrinho = []; total = 0; atualizarInterface(); fecharModal();
    }
}

/* ===================================================
   4. INTERFACE (MENU E CARROSSEL)
   =================================================== */

function toggleMenu() {
    const menu = document.getElementById("menuLateral");
    const overlay = document.getElementById("overlay");
    if (!menu) return;
    const aberto = menu.style.width === "280px";
    menu.style.width = aberto ? "0px" : "280px";
    overlay.style.display = aberto ? "none" : "block";
}

function showSlide(index) {
    const slidesContainer = document.querySelector('.carousel-slide');
    const slides = document.querySelectorAll('.carousel-slide img');
    if (!slidesContainer || slides.length === 0) return;

    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slidesContainer.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function moveSlideManual(direction) {
    clearInterval(autoPlayTimer); 
    showSlide(currentSlide + direction);
    iniciarPassagemAutomatica(); 
}

function iniciarPassagemAutomatica() {
    clearInterval(autoPlayTimer); 
    autoPlayTimer = setInterval(() => showSlide(currentSlide + 1), 5000);
}
