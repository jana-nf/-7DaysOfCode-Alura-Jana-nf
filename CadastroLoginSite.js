// Ao se cadastrar em um site e, em seguida fazer login, ele já te chama pelo seu nome
// Esse é o desafio de hoje!
// De maneira bem simples, pois o foco é entender como capturar e armazenar valores dentro de variáveis
// Vamos lá!

// O sistema de usuário do site vai te pedir para responder três perguntas: 
// Qual é o seu nome []?
// Quantos anos você tem []?
// Qual linguagem de programação você está estudando []?

// Depois de responder, o sistema deve exibir a mensagem abaixo
// "Olá, [nome]! Você tem [idade] anos e está estudando [linguagem]!"

let nome = prompt("Qual é o seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá, ${nome}! Você tem ${idade} anos e está estudando ${linguagem}!`);

gostaDeEstudar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM e 2 para NÃO.`);

if (gostaDeEstudar == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso!");
} else if (gostaDeEstudar == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}


// Exercício Opcional:

// Você vai complementar o código para que, depois de exibir a mensagem anterior, o sistema pergunte:
let gostaDeEstudar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM e 2 para NÃO.`);

if (gostaDeEstudar == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso!");
} else if (gostaDeEstudar == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}

// Dicas:

// Para imprimir e receber valores, você pode tanto usar: 
// 1. Use o método prompt() para capturar os valores
// 2. Use o método alert() para exibir as mensagens
// 3. Use o console.log() para exibir os valores armazenados nas variáveis


// Você pode usar a estrutura condicional if para resolver o Exercício Opcional:
// if (resposta === 1) {
//     dê a resposta positiva
// }
// if (resposta === 2) {
//     dê a resposta negativa

// Tanto o alert() quanto o prompt() são usados para criar caixas de diálogo
// e interagir com o usuário, mas eles são diferentes entre si
// O alert() é usado para exibir uma mensagem simples ao usuário

// Exemplo: 

alert("Olá, pessoal!");

// Já o prompt() precisa que o usuário insira algum valor, que você poderá manipular
