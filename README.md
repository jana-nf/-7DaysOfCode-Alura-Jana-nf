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



## Dia 3/7

Vamos jogar?

Que tal um jogo que te desse mais de uma escolha e, dependendo do que escolhesse, o destino da personagem seria totalmente diferente?

Para isso acontecer, é preciso trabalhar com estruturas de controle de fluxo como for, while, if e else. Todas elas conseguem cumprir esse objetivo, dada uma certa condição.

## DICA

Pois bem, o desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher: 

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

Vale lembrar que é importante saber como utilizar as estruturas condicionais e loops em JavaScript.

E, você poderá usar console.log, prompt e alert para desenvolver o jogo.


## Dia 4/7

Vamos continuar jogando?


QUe tal adivinhar o número que seu amigo ou amiga estava pensando? 


Primeiro, precisamos criar um programa que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).


Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar.
Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

## DICA

Pense muito bem em qual estrutura de repetição você irá utilizar para fazer o seu programa ser executado até o momento em que as 3 tentativas acabem, ou até a pessoa acertar o número.

Lembre-se que você pode sempre personalizar o seu programa da forma que quiser.


## Dia 5/7


Sabe quando você vai no supermercado com uma lista de compras e acaba ficando indo e voltando nos mesmos corredores até completar a lista?

Você precisa de uma maçã e vai para a área de frutas. 
O próximo item é um leite e você segue para os laticínios. 
Mas em seguida você anotou a pêra, e precisa novamente retornar para a área de frutas.

Depois que você resolver o desafio de hoje, com certeza não fará mais isso!

Assim como a nossa lista de compras, é muito comum que programas trabalhem com listas de strings, números e objetos.

Pense em todo catálogo de e-commerce que você já viu, na lista de eventos do seu Google Calendar, ou ainda na sua caixa de e-mails.
Todos esses sites usam listas para exibir informações de uma forma simples e fácil de entender.

Além disso, você pode aproveitar as listas para fazer filtros, ordenação, e outras funcionalidades muito úteis.

Então, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras,
e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, 
e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, 
com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. 
Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, 
ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho

## DICA

Existe um objeto dentro da linguagem Javascript que é usado justamente para criar listas de elementos, chamado Array. 

Lembre-se que você sempre pode estilizar da maneira que quiser o seu programa, 
inclusive utilizando outras tecnologias para isso, como HTML e CSS.

Porém, isso não é obrigatório na nossa lista de lógica de programação com Javascript.
Como eu já mencionei nos dias anteriores, você pode usar recursos como console.log, alert e prompt para desenvolver o seu programa.

