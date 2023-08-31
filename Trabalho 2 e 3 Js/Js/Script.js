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

const salariosFiltrados2500 = salariosCOmAumento.filter(salario => salario > 2500);

console.log(salariosFiltrados2500);


//3 - agora utilizando o array de resultado do exercício anterior, usando o método reduce(), some os valores

const salariosJáFiltrados = [3300, 5500, 4950];

const somaSalarios = salariosJáFiltrados.reduce((acc,numero) => acc + numero);
//tirar duvida com o professor sobre colocar o 0 no fim, pra mim não faz diferença

console.log(`Soma dos salários superiores a 2500: ${somaSalarios}`);





// exercicio 3 da apostila Revisão JS

// Selecionar elementos

const paidTaskCheck = document.getElementById('paid-task');            //Verifica se a tarefa é paga ou não
const timedTaskCheck = document.getElementById('timed-task');
const addBotao = document.getElementById('add-task-button');

const departmentInput = document.getElementById('task-department');    //Pega o Departamento
const authorInput = document.getElementById('task-author');            //Pega o Autor
const orderTasksButton = document.getElementById('order-tasks-button');
const importanceList = document.getElementById('importance-list');

const descriptionInput = document.getElementById('task-description');  //pega o valor digitado
const taskTableBody = document.querySelector('#exercicio-3 tbody[tarefas]');

const importanceInput = document.getElementById('task-importance');    //Pega a Importancia 




// Função para adicionar tarefa
// addTalsk vai pegar os valores colocados pelo usuário e colocalos em uma nova linha com a proxima funsão createTaskRow
function addTask() {
  const description = descriptionInput.value;
  const author = authorInput.value;
  const department = departmentInput.value;
  const importance = importanceInput.value || null;
  const isPaid = paidTaskCheck.checked;
  const hasDuration = timedTaskCheck.checked;

  const task = {
    description,
    author,
    department,
    importance,
    isPaid,
    hasDuration
  };

  const row = createTaskRow(task); //chama a função e passa o obj "task" e retorno é armazenado em row
  taskTableBody.insertAdjacentHTML('beforeend', row); //pega o corpo da tabela e isere o html (linha no fim da tabela) e passa row com a nova linha
}

// Eventos 
//as duas funsões a baixo irão add um evento diferente para cada botão, 1. add uma tarefa; 2. ordena as tarefas
addBotao.addEventListener('click', addTask);
orderTasksButton.addEventListener('click', orderTasksByImportance);


// Função para deletar tarefa
// Depois de ter add uma nova linha no HTML, irá ter um botão ao lado para apagar aquela linha
function deleteTask(taskId) {
  const taskRow = document.getElementById(taskId);
  if (taskRow) {
    taskRow.remove();
  }
}

// Função para criar linha da tabela
// Recebe um objeto task, cria o HTML da linha com os dados, retorna essa string.
function createTaskRow(task) {
  const id = `task-${task.id}`; // id único
  // Return vai ter as strings que vai compor o HTML
  return ` 
    <tr id="${id}">
      <td>${task.description}</td>
      <td>${task.author}</td>
      <td>${task.department}</td>
      <td>${task.importance}</td>
      <td>${task.isPaid ? 'R$ 99,99' : '-'}</td>
      <td>${task.hasDuration ? '3 dias' : '-'}</td>
      <td><button onclick="deleteTask('${id}')">Excluir</button></td>
    </tr>
  `; //a ultima linha tem a coluna com o botão de excluir aquela linha
}




// Função para ordenar tarefas por importância
// Converte as linhas em array, criando na parte inferior da página uma nova lista, porém, ordenada de acordo com sua importancia númerica pela
// Descrião
//isso foi possivel pela utilização do map, que vai pegar a tabela row e retornar 
function orderTasksByImportance() {
  const taskRows = Array.from(taskTableBody.querySelectorAll('tr')); 
  const sortedTasks = taskRows
    .map(row => {
      return {
        description: row.querySelector('td:first-child').textContent,
        importance: parseInt(row.querySelector('td:nth-child(4)').textContent) || 0 //vai converter o texto da quarta coluna e transforma em número
      };
    })
    .sort((taskA, taskB) => taskB.importance - taskA.importance); // vai ordenar a importancia de forma decrecente 

  importanceList.innerHTML = ''; //limpa o HTML interno do elemento antes de preencher um novo conteúdo

  sortedTasks.forEach(task => { //vai percorrer o novo array e colocar a "Descrição" na lista na ordem de importancia 
    const listItem = document.createElement('li');
    listItem.textContent = task.description;
    importanceList.appendChild(listItem);
  });
}

//seleciona todas as linhas da tabela convertendo para um array
//lembrando: map cria novo array apartir de um já existente