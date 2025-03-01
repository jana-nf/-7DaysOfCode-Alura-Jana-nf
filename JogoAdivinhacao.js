//Vamos continuar brincando?

//Que tal adivinhar o número que seu amigo ou amiga estava pensando?

//Primeiro, precisamos criar um programa que comece com um valor específico pré-definido entre 0 a 10
//para o número que você vai adivinhar (7, por exemplo).

//Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, 
//caso você acerte, ele irá te parabenizar.
//Caso erre, ele vai te dar mais 2 tentativas.

//No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

//Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

const numeroSecreto = Math.floor(Math.random() * 11);
let tentativas = 3;

while (tentativas > 0) {
    const chute = parseInt(prompt("Digite um número entre 0 e 10:"));
    
    if (chute === numeroSecreto) {
        alert("Parabéns! Você acertou!");
        break;
    } else {
        tentativas--;
        alert(`Errado! Você tem mais ${tentativas} tentativa(s).`);
    }
}

if (tentativas === 0) {
    alert(`Que pena! O número era ${numeroSecreto}.`);
}

//Dicas:
//Pense muito bem em qual estrutura de repetição você irá utilizar 
//para fazer o seu programa ser executado até o momento em que as 3 tentativas acabem, 
//ou até a pessoa acertar o número.

//Lembre-se que você pode sempre personalizar o seu programa da forma que quiser.