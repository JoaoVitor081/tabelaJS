function renderTabelaPeriodica() {
    const tabelaContainer = document.getElementById('tabela-container');
    
    tabelaContainer.innerHTML = '';
    
    for (let linha = 1; linha <= 7; linha++) {
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
                else if (elemento.grupo.includes('metal')) classeCor = 'metal';
                else if (elemento.grupo.includes('metalóide')) classeCor = 'metaloide';
                else if (elemento.grupo.includes('não metal')) classeCor = 'nao-metal';
                else if (elemento.grupo.includes('halog')) classeCor = 'halogenio';
                else if (elemento.grupo.includes('gás nobre')) classeCor = 'gas-nobre';
                else if (elemento.grupo.includes('post-transition')) classeCor = 'pos-transicao';
                
                td.innerHTML = `
                    <div class="elemento ${classeCor}">
                        <span class="numero">${elemento.numeroAtomico}</span>
                        <span class="simbolo">${elemento.simbolo}</span>
                        <span class="nome">${elemento.nome}</span>
                        <span class="massa">${elemento.massaAtomica}</span>
                    </div>
                `;
            } 
            else {
                td.classList.add('elemento-vazio');
            }
            
            tr.appendChild(td);
        }
        
        tabelaContainer.appendChild(tr);
    }
}

document.addEventListener('DOMContentLoaded', renderTabelaPeriodica);

