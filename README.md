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




