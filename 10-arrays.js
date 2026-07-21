
// ==================================================
// ARRAYS (VETORES)
// ==================================================

// Um Array serve para armazenar vários valores
// dentro de uma única variável.

// Um objeto guarda informações relacionadas.
// Um array guarda uma lista de valores.


// ==================================================
// CRIANDO UM ARRAY
// ==================================================

let frutas = [

    "Maçã",

    "Banana",

    "Uva"

];

console.log(frutas);


// Também podemos escrever:

let numeros = [10, 20, 30, 40];


// ==================================================
// ÍNDICES
// ==================================================

// Os Arrays começam sempre pela posição 0.

// Posição:

// 0       1         2

// Maçã | Banana | Uva


console.log(frutas[0]); // Maçã

console.log(frutas[1]); // Banana

console.log(frutas[2]); // Uva


// ==================================================
// ALTERANDO UM VALOR
// ==================================================

frutas[1] = "Laranja";

console.log(frutas);

// Resultado:

// ["Maçã", "Laranja", "Uva"]


// ==================================================
// ADICIONANDO UM NOVO ITEM
// ==================================================

// push() adiciona um item no FINAL.

frutas.push("Morango");

console.log(frutas);


// ==================================================
// REMOVENDO O ÚLTIMO ITEM
// ==================================================

// pop() remove o último item.

frutas.pop();

console.log(frutas);


// ==================================================
// ADICIONANDO NO INÍCIO
// ==================================================

// unshift() adiciona no começo.

frutas.unshift("Pera");

console.log(frutas);


// ==================================================
// REMOVENDO O PRIMEIRO
// ==================================================

// shift() remove o primeiro item.

frutas.shift();

console.log(frutas);


// ==================================================
// TAMANHO DO ARRAY
// ==================================================

// length retorna a quantidade de elementos.

console.log(frutas.length);


// Exemplo:

let alunos = [

    "Lucas",

    "Maria",

    "Pedro",

    "Ana"

];

console.log(alunos.length);

// Resultado:

// 4


// ==================================================
// PERCORRENDO COM FOR
// ==================================================

// O for é muito usado com Arrays.

let cores = [

    "Azul",

    "Verde",

    "Preto"

];

for (let i = 0; i < cores.length; i++) {

    console.log(cores[i]);

}


// Resultado:

// Azul

// Verde

// Preto


// ==================================================
// FOR...OF
// ==================================================

// Percorre diretamente os valores.

let linguagens = [

    "HTML",

    "CSS",

    "JavaScript"

];

for (let linguagem of linguagens) {

    console.log(linguagem);

}


// Resultado:

// HTML

// CSS

// JavaScript


// ==================================================
// INCLUDES()
// ==================================================

// Verifica se existe um valor.

let jogos = [

    "Minecraft",

    "Valorant",

    "GTA"

];

console.log(jogos.includes("GTA"));

// true

console.log(jogos.includes("Free Fire"));

// false


// ==================================================
// INDEXOF()
// ==================================================

// Retorna a posição do elemento.

let animais = [

    "Cachorro",

    "Gato",

    "Coelho"

];

console.log(animais.indexOf("Gato"));

// Resultado:

// 1


// Se não existir:

console.log(animais.indexOf("Leão"));

// Resultado:

// -1


// ==================================================
// SPLICE()
// ==================================================

// Remove ou adiciona elementos.

// splice(posição, quantidade)

let nomes = [

    "Lucas",

    "Maria",

    "Pedro"

];

nomes.splice(1, 1);

console.log(nomes);

// Resultado:

// Lucas
// Pedro


// ==================================================
// JOIN()
// ==================================================

// Junta todos os elementos em uma String.

let letras = [

    "A",

    "B",

    "C"

];

console.log(letras.join("-"));

// Resultado:

// A-B-C


// ==================================================
// ARRAY DE NÚMEROS
// ==================================================

let notas = [

    8,

    7,

    10,

    6

];

console.log(notas);


// ==================================================
// ARRAY DE OBJETOS
// ==================================================

let pessoas = [

    {

        nome: "Lucas",

        idade: 18

    },

    {

        nome: "Maria",

        idade: 17

    }

];

console.log(pessoas[0].nome);

console.log(pessoas[1].idade);


// ==================================================
// ARRAY MISTO
// ==================================================

// Pode armazenar vários tipos,
// mas não é recomendado.

let lista = [

    "Lucas",

    18,

    true,

    null

];

console.log(lista);


// ==================================================
// EXEMPLO PRÁTICO
// ==================================================

let produtos = [

    "Mouse",

    "Teclado",

    "Monitor"

];

for (let i = 0; i < produtos.length; i++) {

    console.log(produtos[i]);

}


// ==================================================
// RESUMÃO
// ==================================================

// [] = cria um Array

// posição 0 = primeiro elemento

// length = quantidade de elementos

// push() = adiciona no final

// pop() = remove o último

// shift() = remove o primeiro

// unshift() = adiciona no começo

// includes() = verifica se existe

// indexOf() = retorna a posição

// splice() = remove ou adiciona elementos

// join() = junta os elementos em texto

// for = percorre um Array

// for...of = percorre os valores do Array


// ==================================================
// DICAS PARA PROVA
// ==================================================

// Array = lista de valores.

// Sempre começa na posição 0.

// length conta quantos elementos existem.

// push() adiciona.

// pop() remove.

// for percorre usando índices.

// for...of percorre diretamente os valores.


// ==================================================
// EXEMPLO COMPLETO
// ==================================================

let carros = [

    "Gol",

    "Civic",

    "Corolla",

    "HB20"

];

console.log(carros[0]);

console.log(carros.length);

carros.push("Onix");

carros.pop();

for (let carro of carros) {

    console.log(carro);

}

