const URL_SCRIPT = 'https://script.google.com/macros/s/AKfycbyk7IuILoIC3AgAfv5CHzkuzx1a4__LwvpVnymd7AEOWEcMKQrk42As5RMYhCZ-VEis/exec';
const WHATSAPP_LOJA = "5581998984913"; 

async function carregarListasDeNoivas(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>Carregando listas...</p>";

    try {
        const response = await fetch(`${URL_SCRIPT}?acao=listarAbas`);
        const listas = await response.json();
        container.innerHTML = "";

        for (const lista of listas) {
            // BUSCA DETALHADA: Vamos buscar os nomes dentro da aba da noiva
            const resDetalhes = await fetch(`${URL_SCRIPT}?acao=buscar&lista=${lista.id}`);
            const dados = await resDetalhes.json();

            // Pega nomes da Coluna H (índice 7) como na sua planilha
            let rawNoiva = dados[0] && dados[0][7] ? dados[0][7] : lista.noiva;
            let rawNoivo = dados[1] && dados[1][7] ? dados[1][7] : "";
            
            // NOVIDADE: Pega a foto da célula H5 (índice 4 da linha 5 no script ou busca direta se disponível)
            // Se o objeto 'lista' já trouxer a foto do listarAbas atualizado, usamos ela.
            // Se não, definimos uma imagem padrão (Sua Logo).
            let fotoNoivos = lista.foto && lista.foto.includes('http') 
                             ? lista.foto 
                             : "https://i.postimg.cc/B607Fvtv/Nevinha-(2).png";

            let nPuro = rawNoiva.replace(/Noiva:\s*/i, "").trim();
            let oPuro = rawNoivo.replace(/Noivo:\s*/i, "").trim();

            let nomeCasal = oPuro ? `${nPuro} & ${oPuro}` : nPuro;

            container.innerHTML += `
                <div class="card-casal" onclick="window.location.href='vitrine-noiva.html?id=${lista.id}'" style="cursor:pointer;">
                    <img src="${fotoNoivos}" alt="Noivos" style="width:100%; height:200px; object-fit:cover;">
                    <div style="padding: 15px; text-align: center;">
                        <h3 style="margin:0; color:#333; font-family: sans-serif;">${nomeCasal.toUpperCase()}</h3>
                        <p style="color:#666; font-size:14px; margin: 10px 0;">Data: ${lista.data || '15/02/2026'}</p>
                        <button class="btn-ver-lista" style="background:#003399; color:white; border:none; padding:10px; width:100%; border-radius:5px; font-weight:bold;">VER LISTA DE PRESENTES</button>
                    </div>
                </div>
            `;
        }
    } catch (error) {
        console.error("Erro:", error);
        container.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>Erro ao carregar listas.</p>";
    }
}

// --- FUNÇÃO PARA A VITRINE (vitrine-noiva.html) ---
async function carregarProdutosDaNoiva(containerId, tituloId) {
    const params = new URLSearchParams(window.location.search);
    const idLista = params.get('id');
    const container = document.getElementById(containerId);
    const campoTitulo = document.getElementById(tituloId);
    
    if (!idLista || !container) return;

    try {
        const res = await fetch(`${URL_SCRIPT}?acao=buscar&lista=${idLista}`);
        const dados = await res.json();
        
        let nNoiva = dados[0] && dados[0][7] ? dados[0][7].replace(/Noiva:\s*/i, "").trim() : "";
        let nNoivo = dados[1] && dados[1][7] ? dados[1][7].replace(/Noivo:\s*/i, "").trim() : "";
        
        const nomeParaExibir = nNoivo ? `${nNoiva} & ${nNoivo}` : nNoiva;
        
        if (campoTitulo && nomeParaExibir) {
            campoTitulo.innerText = nomeParaExibir.toUpperCase();
        } else if (campoTitulo) {
            campoTitulo.innerText = "LISTA DE PRESENTES";
        }

        container.innerHTML = "";

        for (let i = 1; i < dados.length; i++) {
            const nome = dados[i][1];   
            const preco = dados[i][2];  
            const status = dados[i][5]; 
            const img = dados[i][6];    

            if (status === "Disponível" && nome) {
                const textoMsg = `Olá! Quero presentear com: ${nome} (R$ ${preco}).\nDa lista de Presente de: ${nomeParaExibir}`;
                const msgEncoded = encodeURIComponent(textoMsg);
                
                container.innerHTML += `
                    <div class="card-produto">
                        <img src="${img && img.includes('http') ? img : 'https://via.placeholder.com/300?text=Sem+Foto'}" 
                             alt="${nome}" 
                             style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
                        <div style="padding:10px; text-align:center;">
                            <h3 style="font-size:16px; margin: 10px 0; color:#333; height:40px; overflow:hidden;">${nome}</h3>
                            <p style="color:#003399; font-weight:bold; font-size:20px; margin-bottom:15px;">R$ ${preco}</p>
                            <a href="https://wa.me/${WHATSAPP_LOJA}?text=${msgEncoded}" 
                               target="_blank" 
                               style="display:block; background:#25D366; color:white; text-align:center; padding:12px; border-radius:5px; text-decoration:none; font-weight:bold; font-size:14px;">
                                🎁 PRESENTEAR
                            </a>
                        </div>
                    </div>
                `;
            }
        }
    } catch (e) {
        console.error("Erro ao carregar vitrine:", e);
        if (campoTitulo) campoTitulo.innerText = "ERRO AO CARREGAR LISTA";
    }
}
