
// ==================================================
// LAÇOS DE REPETIÇÃO (LOOPS)
// ==================================================

// Os laços servem para repetir um bloco de código
// várias vezes sem precisar escrever o mesmo código.


// ==================================================
// WHILE
// ==================================================

// while = "enquanto"

// Enquanto a condição for verdadeira,
// o código continua executando.


// Estrutura:

/*

while (condicao) {

    // código

}

*/


// ==================================================
// VARIÁVEL DE CONTROLE
// ==================================================

// Todo while precisa de uma variável de controle.

// Ela controla quantas vezes o laço será executado.

let i = 0;


// ==================================================
// EXEMPLO
// ==================================================

let numero = 0;

while (numero < 5) {

    console.log(numero);

    numero++;

}


// Resultado:

// 0
// 1
// 2
// 3
// 4


// O JavaScript faz assim:

// numero vale 0?

// Sim.

// Executa.

// Soma +1.

// Volta no while.

// Continua até numero chegar em 5.


// ==================================================
// IMPORTANTE
// ==================================================

// Nunca esqueça de alterar a variável de controle.

let contador = 0;

while (contador < 5) {

    console.log(contador);

    contador++;

}


// Sem o contador++:

/*

let contador = 0;

while(contador < 5){

    console.log(contador);

}

*/


// O resultado será um LOOP INFINITO.

// O contador nunca muda de valor.


// ==================================================
// PASSO A PASSO
// ==================================================

let x = 0;

while (x < 3) {

    console.log(x);

    x++;

}


// O JavaScript executa assim:

// x = 0

// 0 < 3 ?
// Sim.

// imprime 0

// x++

// x = 1

// 1 < 3 ?
// Sim.

// imprime 1

// x++

// x = 2

// 2 < 3 ?
// Sim.

// imprime 2

// x++

// x = 3

// 3 < 3 ?
// Não.

// O while termina.


// ==================================================
// DO...WHILE
// ==================================================

// Parecido com o while.

// A diferença é:

// O do...while SEMPRE executa
// pelo menos UMA VEZ.

// Depois verifica a condição.


// Estrutura:

/*

do {

    // código

} while (condicao);

*/


// Exemplo:

let senha = "";

do {

    console.log("Digite uma senha.");

} while (senha !== "");


// Mesmo que a condição seja falsa,
// ele executa uma vez.


// Outro exemplo:

let valor = 10;

do {

    console.log(valor);

} while (valor < 5);


// Resultado:

// 10

// Apenas uma vez.


// ==================================================
// DIFERENÇA
// ==================================================

// while

// Primeiro verifica.

// Depois executa.


// do...while

// Primeiro executa.

// Depois verifica.


// while:

let numero1 = 10;

while (numero1 < 5) {

    console.log(numero1);

}

// Resultado:

// Nada acontece.


// do...while:

let numero2 = 10;

do {

    console.log(numero2);

} while (numero2 < 5);


// Resultado:

// 10


// ==================================================
// FOR
// ==================================================

// O for é o laço mais utilizado.

// Ideal quando sabemos
// quantas vezes queremos repetir.


// Estrutura:

/*

for(início; condição; incremento){

    // código

}

*/


// Exemplo:

for (let i = 0; i < 5; i++) {

    console.log(i);

}


// Resultado:

// 0
// 1
// 2
// 3
// 4


// ==================================================
// COMO O FOR FUNCIONA
// ==================================================

// for (let i = 0; i < 5; i++)

// Parte 1

let i = 0;

// Cria a variável.

// Parte 2

i < 5;

// Enquanto for verdadeiro,
// continua repetindo.

// Parte 3

i++;

// Soma 1 a cada repetição.


// ==================================================
// CONTAGEM DECRESCENTE
// ==================================================

for (let i = 10; i >= 0; i--) {

    console.log(i);

}


// Resultado:

// 10
// 9
// 8
// ...
// 0


// ==================================================
// TABUADA
// ==================================================

let numeroTabuada = 5;

for (let i = 1; i <= 10; i++) {

    console.log(numeroTabuada + " x " + i + " = " + (numeroTabuada * i));

}


// ==================================================
// EXEMPLO PRÁTICO
// ==================================================

// Mostrar de 1 até 100

for (let i = 1; i <= 100; i++) {

    console.log(i);

}


// Somar números

let soma = 0;

for (let i = 1; i <= 5; i++) {

    soma += i;

}

console.log(soma);


// Resultado:

// 15


// ==================================================
// BREAK
// ==================================================

// break encerra o laço imediatamente.

for (let i = 0; i < 10; i++) {

    if (i === 5) {

        break;

    }

    console.log(i);

}


// Resultado:

// 0
// 1
// 2
// 3
// 4


// ==================================================
// CONTINUE
// ==================================================

// continue pula apenas UMA repetição.

for (let i = 0; i < 5; i++) {

    if (i === 2) {

        continue;

    }

    console.log(i);

}


// Resultado:

// 0
// 1
// 3
// 4


// ==================================================
// RESUMÃO
// ==================================================

// while
// Enquanto a condição for verdadeira.

// do...while
// Executa uma vez.
// Depois verifica.

// for
// Melhor quando sabemos
// quantas repetições serão feitas.

// ++
// Soma 1.

// --
// Subtrai 1.

// break
// Encerra o laço.

// continue
// Pula uma repetição.


// ==================================================
// QUANDO USAR
// ==================================================

// while
// Quando não sabemos exatamente
// quantas repetições serão feitas.

// Exemplo:
// Login.
// Senha.
// Menu.

// do...while
// Quando o código precisa
// executar pelo menos uma vez.

// Exemplo:
// Pedir senha.
// Mostrar menu.

// for
// Quando sabemos
// a quantidade de repetições.

// Exemplo:
// Tabuada.
// Contagem.
// Percorrer listas.
// Mostrar produtos.

