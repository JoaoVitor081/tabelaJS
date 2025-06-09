function renderTabelaPeriodica() {
    const tabelaContainer = document.getElementById('tabela-container');
    
    tabelaContainer.innerHTML = '';
    
    for (let linha = 1; linha <= 10; linha++) {
        const tr = document.createElement('tr');
        
        for (let coluna = 1; coluna <= 18; coluna++) {
            const td = document.createElement('td');
            
            const elemento = colecaoElementos.find(el => 
                parseInt(el.linha) === linha && parseInt(el.coluna) === coluna
            );
            
            if (elemento) {
                let classeCor = 'outros';
                if (elemento.grupo.includes('alcalino')) classeCor = 'metal-alcalino';
                else if (elemento.grupo.includes('alcalino-terroso')) classeCor = 'metal-alcalino-terroso';
                else if (elemento.grupo.includes('lantan')) classeCor = 'lantanideo';
                else if (elemento.grupo.includes('actin')) classeCor = 'actinideo';
                else if (elemento.grupo.includes('transição')) classeCor = 'metal-transicao';
                else if (elemento.grupo.includes('metal')) classeCor = 'nao-metal';
                else if (elemento.grupo.includes('metalóide')) classeCor = 'metaloide';
                else if (elemento.grupo.includes('não metal')) classeCor = 'metal';
                else if (elemento.grupo.includes('halog')) classeCor = 'halogenio';
                else if (elemento.grupo.includes('gás nobre')) classeCor = 'gas-nobre';
                else if (elemento.grupo.includes('post-transition')) classeCor = 'pos-transicao';
                
                const divElemento = document.createElement('div');
                divElemento.className = `elemento ${classeCor}`;
                divElemento.style.backgroundColor = elemento.corGrupo; 
                divElemento.innerHTML = `
                    <span class="numero">${elemento.numeroAtomico}</span>
                    <span class="simbolo">${elemento.simbolo}</span>
                    <span class="nome">${elemento.nome}</span>
                    <span class="massa">${elemento.massaAtomica}</span>
                `;
                
                divElemento.addEventListener('click', function() {
                    mostrarInformacoesElemento(elemento);
                });
                
                td.appendChild(divElemento);
            } 
            else {
                td.classList.add('elemento-vazio');
            }
            
            tr.appendChild(td);
        }
        
        tabelaContainer.appendChild(tr);
    }
}

function mostrarInformacoesElemento(elemento) {
    const infoContainer = document.getElementById('elemento-info');
    if (!infoContainer) return;


    infoContainer.innerHTML = `
        <div class="elemento-detalhes">
            <h2>${elemento.nome} (${elemento.simbolo})</h2>
            <button id="voltacima1" class="voltacima">⬆️</button>
            <div class="info-grid">
                <p><strong>Número Atômico:</strong> ${elemento.numeroAtomico}</p>
                <p><strong>Massa Atômica:</strong> ${elemento.massaAtomica}</p>
                <p><strong>Grupo:</strong> ${elemento.grupo}</p>
                <p><strong>Configuração Eletrônica:</strong> ${elemento.configuracaoEletronica}</p>
                <p><strong>Estado Padrão:</strong> ${elemento.estadoPadrao}</p>
                <p><strong>Ponto de Fusão:</strong> ${elemento.pontoDeFusao} K</p>
                <p><strong>Ponto de Ebulição:</strong> ${elemento.pontoDeEbulicao} K</p>
                <p><strong>Densidade:</strong> ${elemento.densidade} g/cm³</p>
                <p><strong>Eletronegatividade:</strong> ${elemento.eletronegatividade}</p>
                <p><strong>Raio Atômico:</strong> ${elemento.raioAtomico} pm</p>
                <p><strong>Raio de Van der Waals:</strong> ${elemento.raioDeVanDerWaals} pm</p>
                <p><strong>Energia de Ionização:</strong> ${elemento.energiaDeIonizacao} kJ/mol</p>
                <p><strong>Afinidade Eletrônica:</strong> ${elemento.afinidadeEletronica} kJ/mol</p>
                <p><strong>Estados de Oxidação:</strong> ${elemento.estadosDeOxidacao}</p>
                <p><strong>Tipo de Ligação:</strong> ${elemento.tipoDeLigacao}</p>
                <p><strong>Ano de Descoberta:</strong> ${elemento.anoDeDescoberta}</p>
            </div>
        </div>
    `;

    window.scrollBy({
        top: 5000,
        behavior: 'smooth'
      });

      const voltarButton = document.getElementById('voltacima1');
    voltarButton.addEventListener('click', function() {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      window.scrollTo(0, 0);
    }
    });
}

function CriarTabelaInferior(elementos) {
    const inferior = document.getElementById('tabelaPeriodicaInferior');
    let tabela = '<table class="mt-4">';

   
    tabela += '<tr>';
    tabela += '<td colspan="3"></td>'; 

    for (let coluna = 3; coluna <= 18; coluna++) {
        const elemento = elementos.find(el => el.linha === 9 && el.coluna === coluna);
        if (elemento) {
            tabela += `
                <td data-numero="${elemento.numeroAtomico}">
                    <div class="elemento" style="background-color: ${elemento.corGrupo}; cursor:pointer;" data-numero="${elemento.numeroAtomico}">
                        <h1 class="numero">${elemento.numeroAtomico}</h1>
                        <h2 class="simbolo">${elemento.simbolo}</h2>
                        <h3 class="nome">${elemento.nome}</h3>
                        h3 class="massa">${elemento.massaAtomica}</h3>
                    </div>
                </td>
            `;
        } else {
            tabela += '<td></td>';
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    addTabelaInferior();
});

document.addEventListener('DOMContentLoaded', renderTabelaPeriodica);