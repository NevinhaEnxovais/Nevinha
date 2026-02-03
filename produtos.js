const listaProdutos = [
    // CATEGORIA: CAMA 
    { nome: "Cobertor Kyor Jolitex", categoria: "casal", preco: 219.00, imagem: "https://i.postimg.cc/qvp2b1q2/kyor.png", descricao: "Gramatura 415 g/m²" },
    { nome: "Edredom Capetown Casal", categoria: "casal", preco: 339.00, imagem: "https://i.postimg.cc/XY9DFHhd/capetow.png", descricao: "Praticidade e conforto" },
    { nome: "Colcha Teka Allegro Plus", categoria: "casal", preco: 89.00, imagem: "https://i.postimg.cc/44M80RRY/colcha-teka.png", descricao: "Casal Padrão" },
    { nome: "Kit Peseira 4 peças", categoria: "casal", preco: 89.00, imagem: "https://i.postimg.cc/xdfXrPkc/kit-peseira.png", descricao: "Casal Padrão com baguete" },
    { nome: "Manta Living Art 300", categoria: "casal", preco: 119.00, imagem: "img/manta-living.jpg", descricao: "Toque de seda" },
    { nome: "Jogo Premiun Plus 100% Algodão", categoria: "casal", preco: 139.00, imagem: "https://i.postimg.cc/hGDXF0Jv/jogo-premiun.jpg", descricao: "4 peças" },
    { nome: "Jogo de Cama Essenciale", categoria: "casal", preco: 149.00, imagem: "https://i.postimg.cc/SKSn0GXK/jogo-de-cama-essenciale.jpg", descricao: "100% Algodão" },
    { nome: "Jogo de Cama Dona do Lar", categoria: "casal", preco: 89.00, imagem: "https://i.postimg.cc/W4NdR7Dp/dona-do-lar.jpg", descricao: "3 Peças" },
    { nome: "Jogo de Cama Microtec 200 fios", categoria: "casal", preco: 120.00, imagem: "https://i.postimg.cc/BvSjWC8n/jogo-de-cama-4-pecas-microte.jpg", descricao: "Toque macio" },
    { nome: "Jogo de Lençol Döhler", categoria: "casal", preco: 249.00, imagem: "https://i.postimg.cc/9fmD3B4W/ambar.png", descricao: "3 Peças Casal" },
    { nome: "Colcha Sicília Niazitex", categoria: "casal", preco: 219.00, imagem: "https://i.postimg.cc/q71zpCn2/sicilia.jpg", descricao: "Kit 3 peças" },
    { nome: "Cobreleito Plaza Lavive", categoria: "casal", preco: 419.00, imagem: "https://i.postimg.cc/KYG1X5K5/plaza.png", descricao: "3 Pçs Dupla Face" },
    { nome: "Kit Colcha Piquet", categoria: "casal", preco: 279.00, imagem: "https://i.postimg.cc/MG6nkYcV/piquet.png", descricao: "100% Algodão" },
    { nome: "Colcha Milão Corttex", categoria: "casal", preco: 117.00, imagem: "https://i.postimg.cc/xdfXrPkk/milao.jpg", descricao: "Casal Padrão" },
    { nome: "Kit Colcha Paris Corttex", categoria: "casal", preco: 117.00, imagem: "https://i.postimg.cc/k5J2ryVc/ponto-palito.png", descricao: "3 Peças Dupla face" }, // Sincronizado com lista
    { nome: "Saia Box Microfibra", categoria: "casal", preco: 179.00, imagem: "https://i.postimg.cc/k5J2ryVc/ponto-palito.png", descricao: "Ponto Palito" },
    { nome: "Saia em Malha Adomes", categoria: "casal", preco: 69.00, imagem: "https://i.postimg.cc/cJFrd8Yw/saia-malha.png", descricao: "Casal" },
    { nome: "Pillow Top Casal Niazitex", categoria: "casal", preco: 319.00, imagem: "img/pillow-top.jpg", descricao: "Conforto Extra" },
    { nome: "Protetor Impermeável c/ Zíper", categoria: "casal", preco: 25.00, imagem: "https://i.postimg.cc/wBw79sJc/travesseiro-impermeavel.png", descricao: "Vivaldi" },
    { nome: "Protetor Impermeável Algodão", categoria: "casal", preco: 149.00, imagem: "https://i.postimg.cc/R0gNvnfH/protetor-impermeavel.png", descricao: "100% Algodão" },

    // BANHO
    { nome: "Toalha de Banho Lumina", categoria: "banho", preco: 79.00, imagem: "https://i.postimg.cc/pdPHXWtf/lumina.jpg", descricao: "Karsten" },
    { nome: "Toalha de Banho Prisma", categoria: "banho", preco: 48.00, imagem: "https://i.postimg.cc/SKmhNSpR/jogo-prisma-variedade.png", descricao: "Döhler" },
    { nome: "Toalha de Banho Wave", categoria: "banho", preco: 54.00, imagem: "https://i.postimg.cc/wBFd1C6R/toalha-banho-rosto-corttex-macio-wave.jpg", descricao: "Corttex" },
    { nome: "Toalha Wave Banhão", categoria: "banho", preco: 64.00, imagem: "https://i.postimg.cc/wBFd1C6Q/wave-banhao.jpg", descricao: "Corttex" },
    { nome: "Toalha Duomo Fio Penteado", categoria: "banho", preco: 69.00, imagem: "https://i.postimg.cc/9fchFmjr/Banho-Duomo-Jan25.jpg", descricao: "" },
    { nome: "Jogo de Toalha 5 peças", categoria: "banho", preco: 199.00, imagem: "https://i.postimg.cc/Lsmp69M4/jogo-mafratex.png", descricao: "100% algodão" },
    { nome: "Jogo Toalha Banho e Rosto", categoria: "banho", preco: 74.00, imagem: "https://i.postimg.cc/GpbChL1n/jogo-2-pecas-dohler.png", descricao: "Döhler" },
    { nome: "Roupão Toque de Seda", categoria: "banho", preco: 149.00, imagem: "img/roupao-seda.jpg", descricao: "Corttex M/F" },
    { nome: "Jogo de Banheiro Riviera", categoria: "banho", preco: 110.00, imagem: "https://i.postimg.cc/SK8jMNnw/riviera.png", descricao: "Jolitex" },
    { nome: "Jogo de Banheiro Oasis", categoria: "banho", preco: 69.00, imagem: "https://i.postimg.cc/3wpWvJkV/jogo-de-banheiro-oasis.png", descricao: "3 Peças" },
    { nome: "Piso Royal 100% Algodão", categoria: "banho", preco: 22.00, imagem: "https://i.postimg.cc/bvbdtNZ4/piso-Royal.png", descricao: "Döhler" },
    { nome: "Jogo de Toalha Lumina 100% algodão", categoria: "banho", preco: 117.00, imagem: "https://i.postimg.cc/pdPHXWtf/lumina.jpg", descricao: "Karsten - Jogo" },
    { nome: "Jogo de Toalhas Lollipop 5 Peças", categoria: "banho", preco: 339.00, imagem: "", descricao: "Premium" },
    { nome: "Lixeira em Inox 5L", categoria: "banho", preco: 99.00, imagem: "", descricao: "Banheiro" },

    // COZINHA E MESA 
    { nome: "Americano Souplast Redondo", categoria: "mesa", preco: 10.00, imagem: "https://i.postimg.cc/Kjsg5pmS/jogo-americano.png", descricao: "Unidade" },
    { nome: "Kit Jogo americano Redondo 6pçs", categoria: "mesa", preco: 60.00, imagem: "https://i.postimg.cc/Kjsg5pmS/jogo-americano.png", descricao: "Conjunto" },
    { nome: "Tapete Cozinha Premier 1,20m", categoria: "mesa", preco: 99.00, imagem: "https://i.postimg.cc/05dvJKcT/manta-de-jarra.png", descricao: "" },
    { nome: "Jogo Tapete Cozinha Gourmet", categoria: "mesa", preco: 149.00, imagem: "https://i.postimg.cc/66LKG4YF/jolitex-tapte-goumet.png", descricao: "3 Peças" },
    { nome: "Pano de Copa Tecilar", categoria: "mesa", preco: 9.00, imagem: "https://i.postimg.cc/4yFh12XG/tecilar.png", descricao: "Döhler" },
    { nome: "Pano de Prato Felpudo", categoria: "mesa", preco: 18.00, imagem: "https://i.postimg.cc/0jHJCXPH/atoalhado.png", descricao: "Döhler" },
    { nome: "Guardanapo ponto palito", categoria: "mesa", preco: 8.00, imagem: "https://i.postimg.cc/D0Ybcpn9/guardanapo.png", descricao: "Tecido" },
    { nome: "Kit Guardanapo Tecido 6 peças", categoria: "mesa", preco: 48.00, imagem: "https://i.postimg.cc/D0Ybcpn9/guardanapo.png", descricao: "Conjunto" },
    { nome: "Manta de Jarra", categoria: "mesa", preco: 59.00, imagem: "https://i.postimg.cc/05dvJKcT/manta-de-jarra.png", descricao: "Pedrarias" },
    { nome: "Escorredor de Louça", categoria: "mesa", preco: 55.00, imagem: "https://i.postimg.cc/4yFh12XC/escorredor-de-louca-buettner.png", descricao: "Buttener" },
    { nome: "Toalha de Mesa Requinte Döhler", categoria: "mesa", preco: 99.00, imagem: "", descricao: "Luxo" },

    // DECORAÇÃO E UTILITÁRIOS (SALA)
    { nome: "Capa de Cadeira 6 Peças", categoria: "sala", preco: 79.00, imagem: "https://i.postimg.cc/fyg0vqDr/capa-de-cadeira-6.png", descricao: "Malha - Jogo 6" },
    { nome: "Capa de Cadeira 4 Peças", categoria: "sala", preco: 65.00, imagem: "https://i.postimg.cc/2yXBx9r9/capa-de-cadeira.png", descricao: "Malha - Jogo 4" },
    { nome: "Cortina Translúcida Messina", categoria: "sala", preco: 399.00, imagem: "https://i.postimg.cc/G2DcfMP3/messina.png", descricao: "Jacquard Döhler" },
    { nome: "Cortina Janela Blackout", categoria: "sala", preco: 99.00, imagem: "https://i.postimg.cc/C18F2vCL/janela.png", descricao: "Bella Janela" },
    { nome: "Cortina Oxford", categoria: "sala", preco: 49.00, imagem: "https://i.postimg.cc/D0K23q5F/cortina-oxford.png", descricao: "3,00m x 2,60m" },
    { nome: "Manta para Sofá Marrocos", categoria: "sala", preco: 99.00, imagem: "", descricao: "Döhler G" },
    { nome: "Tapete Centro Classic Oasis", categoria: "sala", preco: 120.00, imagem: "", descricao: "1.0 x 1.50" },
    { nome: "Puff Trançado", categoria: "sala", preco: 218.00, imagem: "", descricao: "Decoração" },
    { nome: "Kit 2 tapetes Porta lima", categoria: "sala", preco: 92.00, imagem: "", descricao: "Niazitex" },
    
    // UTILITÁRIOS 
    { nome: "Cozedor de Ovos Elétrico", categoria: "utilitarios", preco: 115.00, imagem: "https://i.postimg.cc/d3ST9NwX/cozedor-de-ovos.pngv", descricao: "Portátil" },
    { nome: "Omeleteira Elétrica", categoria: "utilitarios", preco: 199.00, imagem: "https://i.postimg.cc/4yFh12Xg/omeleteira.png", descricao: "Multilaser" },
    { nome: "Chaleira Elétrica 1,8L", categoria: "utilitarios", preco: 139.00, imagem: "https://i.postimg.cc/GtSsjgdM/chaleira.png", descricao: "Inox" },
    { nome: "Utensílios para Churrasco", categoria: "utilitarios", preco: 89.00, imagem: "https://i.postimg.cc/vTS6v2Gw/kit-churrasco.png", descricao: "Inox" }
];