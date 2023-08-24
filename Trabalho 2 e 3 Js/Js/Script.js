// exercicio 2 da apostila Revisão JS

//1 – Crie um array contendo 10 valores de salário e utilizando o método map() atribua um aumento de 15% para salários até 2000 e um aumento de 10% para salários acima de 2000.

const salarios = [1200,3000,500,2000, 5500, 1500, 1000, 850, 2100, 4200];

const AumentoSalarios = salarios.map(salary => {
    if (salary <= 2000){
        return salary * 1.15;
    } else {
        return salary * 1.10;
    }
});

        console.log(AumentoSalarios);

