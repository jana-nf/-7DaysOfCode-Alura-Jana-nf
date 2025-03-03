const readline = require('readline-sync');

//Vamos organizar o código?

//É obrigatório para aprender como dev, 
//pois você vai precisar dar manutenção no seu código criado, 
//ou até ajeitar algo no código que outra pessoa escreveu.


//Uma ótima prática é sempre separar cada trecho do seu código 
//que realizará alguma função específica em blocos de código ainda menores, 
//que poderão ser reutilizados e chamados a qualquer outro momento ao longo do seu programa. 
//São as chamadas funções.

//O desafio é criar uma calculadora e suas funções básicas.
//Ela pede para você digitar um número, 
//depois você seleciona um tipo de operação, 
//um outro número, e ela faz sozinha o cálculo para te mostrar o resultado! 
//Incrível, né?

//Criar uma calculadora: cada operação deverá ser uma função diferente no seu código.

//Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

//Depois, ela deverá inserir os dois valores que deseja utilizar, 
//e o programa imprimirá o resultado da operação em questão.

//As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. 
//Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        console.log("Não é possível dividir por zero.");
        return null;
    }
    return a / b;
}

let operacao = '';

while (operacao !== 'sair') {
    console.log("Escolha uma operação: soma, subtracao, multiplicacao, divisao, sair");
    operacao = readline.question();

    if (operacao === 'sair') {
        console.log("Até a próxima");
        break;
    }

    const num1 = parseFloat(readline.question("Digite o primeiro número: "));
    const num2 = parseFloat(readline.question("Digite o segundo número: "));

    switch (operacao) {
        case 'soma':
            console.log(`Resultado: ${soma(num1, num2)}`);
            break;
        case 'subtracao':
            console.log(`Resultado: ${subtracao(num1, num2)}`);
            break;
        case 'multiplicacao':
            console.log(`Resultado: ${multiplicacao(num1, num2)}`);
            break;
        case 'divisao':
            const resultado = divisao(num1, num2);
            if (resultado !== null) {
                console.log(`Resultado: ${resultado}`);
            }
            break;
        default:
            console.log("Operação inválida");
    }
}
//DICA
//Cada operação deverá ter uma função diferente no seu código, 
//que receberá os valores inseridos como parâmetros e retornará com o resultado da operação.

//Não esqueça de usar estruturas de repetição para fazer a calculadora imprimir a escolha de operação
//até que a pessoa deseje parar o programa.

//Lembre-se também de que, além do if e else, também temos o switch, 
//muito interessante de se utilizar em casos como esse, de múltipla escolha.


