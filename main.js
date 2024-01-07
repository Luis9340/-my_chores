let minhaListaDeItens = [];

$(document).ready(function() {
    const button = $('.button-add-task');
    const input = $('.input-task');
    const listaCompleta = $('.list-task');

    button.on('click', adicionaNovaTarefa);

    function adicionaNovaTarefa() {
        minhaListaDeItens.push({
            tarefa: input.val(),
            concluida: false
        });

        input.val('');

        mostrarTarefas();
    }

    function mostrarTarefas() {
        let novaLi = '';

        minhaListaDeItens.forEach((item, posicao) => {
            novaLi += `
            <li class="task ${item.concluida ? 'done' : ''}">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" class="concluir-svg">
                    <path d="M15 26.5625C21.3858 26.5625 26.5625 21.3858 26.5625 15C26.5625 8.61421 21.3858 3.4375 15 3.4375C8.61421 3.4375 3.4375 8.61421 3.4375 15C3.4375 21.3858 8.61421 26.5625 15 26.5625Z" stroke="#1ED69F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.375 15.0422L13.3546 18.9375L20.625 11.0625" stroke="#1ED69F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>${item.tarefa}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" class="deletar-svg">
                    <path d="M6.25 11.5625L7.15104 21.9388C7.34787 24.5469 9.5214 26.5625 12.1369 26.5625H17.8631C20.4786 26.5625 22.6521 24.5469 22.849 21.9388L23.75 11.5625" stroke="#F55046" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.6875 7.8125H25.3125" stroke="#F55046" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.6875 7.8125V7.1875C19.6875 5.11644 18.0086 3.4375 15.9375 3.4375H14.0625C11.9914 3.4375 10.3125 5.11644 10.3125 7.1875V7.8125" stroke="#F55046" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </li>
            `;
        });

        listaCompleta.html(novaLi);

        $('.concluir-svg').on('click', function() {
            const posicao = $('.concluir-svg').index(this);
            concluirTarefa(posicao);
        });

        $('.deletar-svg').on('click', function() {
            const posicao = $('.deletar-svg').index(this);
            deletarItem(posicao);
        });
    }

    function concluirTarefa(posicao) {
        minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;
        mostrarTarefas();
    }

    function deletarItem(posicao) {
        minhaListaDeItens.splice(posicao, 1);
        mostrarTarefas();
    }
});




//<li class="task">
//<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
//    <path d="M15 26.5625C21.3858 26.5625 26.5625 21.3858 26.5625 15C26.5625 8.61421 21.3858 3.4375 15 3.4375C8.61421 3.4375 3.4375 8.61421 3.4375 15C3.4375 21.3858 8.61421 26.5625 15 26.5625Z" stroke="#1ED69F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//    <path d="M9.375 15.0422L13.3546 18.9375L20.625 11.0625" stroke="#1ED69F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//</svg>
//<p>Tarefa escrita pelo usuário</p>
//<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
//    <path d="M6.25 11.5625L7.15104 21.9388C7.34787 24.5469 9.5214 26.5625 12.1369 26.5625H17.8631C20.4786 26.5625 22.6521 24.5469 22.849 21.9388L23.75 11.5625" stroke="#F55046" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//    <path d="M4.6875 7.8125H25.3125" stroke="#F55046" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//    <path d="M19.6875 7.8125V7.1875C19.6875 5.11644 18.0086 3.4375 15.9375 3.4375H14.0625C11.9914 3.4375 10.3125 5.11644 10.3125 7.1875V7.8125" stroke="#F55046" stroke-width="1.5" stroke-linecap="round"/>
//</svg>
//</li>