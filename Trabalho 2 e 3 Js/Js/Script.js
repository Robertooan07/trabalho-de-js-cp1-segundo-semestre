// exercicio 2 da apostila Revisão JS

//1 – Crie um array contendo 10 valores de salário e utilizando o método map() atribua um aumento de 15% para salários até 2000 e um aumento de 10% para salários acima de 2000.

const salarios = [1200, 3000, 500, 2000, 5500, 1500, 1000, 850, 2100, 4200];

const AumentoSalarios = salarios.map(salary => {
    if (salary <= 2000){
        return salary * 1.15;
    } else {
        return salary * 1.10;
    }
});

        console.log(AumentoSalarios);

//2 – Utilizando o array de resultado anterior, crie um novo array, usando o método filter(), contendo somente os salários superiores a 2500.

const salariosCOmAumento = [1725, 1380, 3300, 920, 5500, 2300, 1495, 4950, 977.5, 2475];

const salariosFiltrados = salariosCOmAumento.filter(salario => salario > 2500);

console.log(salariosFiltrados);


// exercicio 3 da apostila Revisão JS

// Array que armazenará as tarefas 
const tarefas = [];

// Função para adicionar nova tarefa
function addTarefa(descricao, autor, departamento, importancia) {
  tarefas.push({
    descricao,
    autor,
    departamento,
    importancia
  });
}

function removerTarefa(index) {
  tarefas.splice(index, 1);
}

function addValor(index, valor) {
  tarefas[index].valor = valor;
} 

// Add duração
function addDuracao(index, duracao) {
  tarefas[index].duracao = duracao;
}

// Função para obter lista por importância
function porImportancia() {
  return tarefas.map(tarefa => tarefa.descricao)
                 .sort((a, b) => tarefas.importancia - b.importancia); 
}

// Exemplo de uso
addTarefa("Criar relatório", "João", "TI", 1); 
addTarefa("Preparar reunião", "Maria", "Administração", 2);

// Adiciona campo valor
addValor(0, 500); 

// Exibe lista por importância
console.log(porImportancia());