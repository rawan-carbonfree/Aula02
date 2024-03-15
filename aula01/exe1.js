let listaDeTarefas = [
    { id: 1, descricao: 'Fazer compras', concluida: false },
    { id: 2, descricao: 'Estudar JavaScript', concluida: true },
    { id: 3, idescricao: 'Lavar o carro', concluida: false },
    { id: 4, descrcao: 'Fazer compras', concluida: false }
];

function adicionarTarefa(descricao) {

    // let novoId =  listaDeTarefas.at(-1).id

    let novoId = listaDeTarefas    

    let tarefa = listaDeTarefas.find(tarefa => tarefa.id === novoId);

    while(tarefa){
        novoId++;
        tarefa = listaDeTarefas.find(tarefa => tarefa.id === novoId);
    }

    const novaTarefa = {
        id: novoId,
        descricao: descricao,
        concluida: false
    };

    listaDeTarefas.push(novaTarefa);
    console.log("Tarefa adicionada!")
    return listaDeTarefas
}

function removerTarefa(id) {
    const tarefa = listaDeTarefas.find(tarefa => tarefa.id === id);

    if (tarefa) {
        listaDeTarefas = listaDeTarefas.filter(tarefa => tarefa.id !== id);
        console.log(`Tarefa de id: ${id} removida com sucesso!`)
    }
    else {
        console.log("Tarefa não encontrada!")
    }    
}

function concluirTarefa(id) {
    const tarefa = listaDeTarefas.find(tarefa => tarefa.id === id);

    if (tarefa) {
        tarefa.concluida = true;
    }
    else {
        console.log("Tarefa não encontrada!")
    }
}

function exibirTarefas() {
    console.log("Tarefas atuais: ")
    listaDeTarefas.forEach(tarefa => {
        console.log(
            `ID: ${tarefa.id}, Descrição: ${tarefa.descricao}, Concluída: ${tarefa.concluida ? 'Sim' : 'Não'}`);
    });
}

exibirTarefas()
adicionarTarefa("Nova tarefa!")
exibirTarefas()
removerTarefa(3)
removerTarefa(2)
removerTarefa(1)
exibirTarefas()
adicionarTarefa("Nova tarefa 2!")
adicionarTarefa("Nova tarefa 2!")
adicionarTarefa("Nova tarefa 2!")
exibirTarefas()