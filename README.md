# 7DaysOfCode-Alura-Jana-nf - Meu repositório da Jornada #7DaysOfCode da Alura em JavaScript!

## Dia 1/7: 

Existem situações super comum para quem utiliza o Javascript, uma delas são os problemas com os tipos de variáveis na hora de comparar os valores de duas variáveis entre si. 

Em linguagens de programação compiladas, como Java e C#, esse problema é detectado em tempo de compilação, e você que está desenvolvendo o código tem um aviso claro do erro.

Já no Javascript, esses erros passam despercebidos, já que o código não passa por um compilador, ou seja, os erros só aparecem em tempo de execução. 

A parte mais confusa para quem está começando a aprender lógica com Javascript é a operação de igualdade entre valores. 
Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo para um tipo booleano de maneira implícita (automática), 
e isso afetará variáveis que eram Strings, Numbers, Object, etc…. 

Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:

console.log( false == '0' );

console.log( null == undefined );

console.log( " \t\r\n" == 0 );

console.log( ' ' == 0 ); 


O que não faz necessariamente muito sentido. 

O primeiro desafio da Joranada #7DaysOfCode é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros: 

let numeroUm = 1

let stringUm = '1'

let numeroTrinta = 30

let stringTrinta = '30'

let numeroDez = 10

let stringDez = '10'



if (COMPARAR O numeroUm e a stringUm) {

  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
  
} else {

  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
  
}



if (COMPARAR O numeroTrinta e a stringTrinta) {

  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
  
} else {

  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
  
}



if (COMPARAR O numeroDez e a stringDez) {

  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
  
} else {

  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
  
}





## Dia 2/7:

Ao se cadastrar em um site e, logo em seguida, ao fazer o login, ele já te chama pelo seu nome? É esse o desafio! 

Você pode começar de maneira bem simples, pois o importante é entender como capturar e armazenar valores dentro de variáveis. 

Variáveis são blocos básicos de construção de qualquer sistema e são essenciais para processar qualquer tipo de informação,
seja ela de uma pessoa logada no sistema ou mesmo para exibir detalhes de produtos em um catálogo de e-commerce.


Por isso, vamos desenvolver um programa simulando um desses sites. 


Ele deve pedir para o usuário responder 3 perguntas:

- Qual é o seu nome?

- Quantos anos você temm?

- Qual linguagem de programação você está estudando?



À medida que as perguntas forem sendo feitas, o usuário que estiver usando o programa deve responder cada uma delas.

No final o sistema vai exibir a mensagem:



"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"



Nota: Cada informação entre [] é uma das respostas dadas pela pessoa.


### Exercício Opcional

Se você quiser aprofundar, segue mais um exercício.

Mas ele é 100% opcional.


Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:


Você gosta de estudar [linguagem]? 

Responda com o número 1 para SIM ou 2 para NÃO.



E, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:


1 > Muito bom! Continue estudando e você terá muito sucesso.

2 > Ahh que pena... Já tentou aprender outras linguagens?



### DICA

Você pode adicionar quantas perguntas quiser, e pode aproveitar as respostas dos usuários na mensagem que será exibida!

Para imprimir e receber valores, você pode tanto usar ### console.log, prompt e alert, quando usar HTML e CSS.


Você pode usar a estrutura condicional if para resolver o Exercício Opcional:


if (resposta == 1){

  // dê a resposta positiva

}

if (resposta == 2){

  // dê a resposta negativa

}




EXTRA


Tanto o alert()

quanto o prompt()

são usados para criar caixas de diálogo e interagir com o usuário, mas eles são diferentes entre si.



O alert() é usado para mostrar uma mensagem simples ao usuário.


Ex: 

alert("Olá, pessoal!");


Já o prompt() precisa que o usuário insira algum valor, que você poderá manipular.

