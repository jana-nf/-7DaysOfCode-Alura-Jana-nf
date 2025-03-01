const prompt = require('prompt-sync')();

//Lista de Compras no Market

//Sabe quando você vai no supermercado com uma lista de compras e acaba ficando indo e voltando
//nos mesmos corredores até completar a lista?

//Você precisa de uma maçã e vai para a área de frutas. 
//O próximo item é um leite e você segue para os laticínios.
//Mas em seguida você anotou a pêra, e precisa novamente retornar para a área de frutas.

//É muito comum que programas trabalhem com listas de strings, números e objetos.
//Você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida
//na sua lista de compras, e você deve poder responder com sim ou não.

//Ele perguntará qual comida você deseja inserir, 
//e você digitará o nome dela, como por exemplo batata.

//Depois, ele deverá perguntar em qual categoria essa comida se encaixa, 
//com algumas opções já pré-definidas, como frutas, laticínios, congelados, 
//doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

//Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta,
//ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

//Caso você adicione na sua lista:
//banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate
//e leite de vaca

//O programa deverá imprimir, por exemplo:

//Lista de compras:
// //Frutas: banana, tomate, maçã, uva, abacate
//Laticínios: leite vegetal, leite de vaca, leite em pó
//Congelados:
//Doces: chiclete e bala de ursinho


    let listaDeCompras = {
        Frutas: [],
        Laticínios: [],
        Congelados: [],
        Doces: []
    };

    let adicionarMais = true;

    while (adicionarMais) {
        let adicionar = prompt('Deseja adicionar uma comida na lista de compras? (sim/não) ').toLowerCase();
        if (adicionar === 'não') {
            adicionarMais = false;
        } else if (adicionar === 'sim') {
            let comida = prompt('Qual comida você deseja inserir? ');
            let categoria = prompt('Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados, Doces) ').toLowerCase();
            
            switch (categoria) {
                case 'frutas':
                    listaDeCompras.Frutas.push(comida);
                    break;
                case 'laticínios':
                    listaDeCompras.Laticínios.push(comida);
                    break;
                case 'congelados':
                    listaDeCompras.Congelados.push(comida);
                    break;
                case 'doces':
                    listaDeCompras.Doces.push(comida);
                    break;
                default:
                    console.log('Categoria não reconhecida. Tente novamente.');
            }
        } else {
            console.log('Resposta não reconhecida. Tente novamente.');
        }
    }

    console.log('Lista de compras:');
    for (let categoria in listaDeCompras) {
        console.log(`    ${categoria}: ${listaDeCompras[categoria].join(', ')}`);
    }


//Dica:

//Existe um objeto dentro da linguagem Javascript que é usado justamente para criar listas de elementos, 
// chamado Array. 

//Lembre-se que você sempre pode estilizar da maneira que quiser o seu programa, 
//inclusive utilizando outras tecnologias para isso, como HTML e CSS.

//Porém, isso não é obrigatório na nossa lista de lógica de programação com Javascript.
//Como eu já mencionei nos dias anteriores, você pode usar recursos como console.log, alert e prompt
//para desenvolver o seu programa.