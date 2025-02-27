
const prompt = require('prompt-sync')();

// Vamos jogar?

// Que tal um jogo que te desse mais de uma escolha e, dependendo do que escolhesse
// o destino da personagem seria totalmente diferente? 

// As estruturas são for, while, if e else. Todas essas estruturas conseguem cumprir esse objetivo,
// dada uma certa condição.

//Seu desafio de hoje será criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

//1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

//2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. 
//Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

//3. Depois, independente das escolhas anteriores, o usuário poderá escolher
//entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack.
//Você deve exibir na tela uma mensagem específica para cada escolha.

//4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar
//ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. 
//Então, enquanto ela continuar respondendo ok para a pergunta: 
//“Tem mais alguma tecnologia que você gostaria de aprender?”, 
//continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão.
//E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

function jogo() {
    const area = prompt("Você quer seguir para a área de Front-End ou seguir para a área de Back-End? ");
    
    if (area.toLowerCase() === "front-end") {
        const frontEnd = prompt("Você quer aprender React ou aprender Vue? ");
        console.log(`Você escolheu aprender ${frontEnd} no Front-End.`);
    } else if (area.toLowerCase() === "back-end") {
        const backEnd = prompt("Você quer aprender C# ou aprender Java? ");
        console.log(`Você escolheu aprender ${backEnd} no Back-End.`);
    } else {
        console.log("Área inválida.");
        return;
    }

    const especializacao = prompt("Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? ");
    console.log(`Você escolheu ${especializacao}.`);

    let maisTecnologias = true;
    while (maisTecnologias) {
        const tecnologia = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer? ");
        console.log(`Você gostaria de aprender ${tecnologia}.`);
        const resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (ok para continuar, qualquer outra tecla para sair) ");
        if (resposta.toLowerCase() !== "ok") {
            maisTecnologias = false;
        }
    }
}

jogo();

// O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar 
// para conseguir aprender e se desenvolver na área de programação.

// Além disso, também é essencial que, ao final do jogo, 
// ela possa inserir quantas tecnologias quiser na lista de aprendizado. 