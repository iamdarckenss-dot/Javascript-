
// ==================================================
// OPERADORES DE COMPARAÇÃO
// ==================================================

// Os operadores de comparação servem para comparar valores.
// O resultado da comparação sempre será:
// true  -> verdadeiro
// false -> falso


// ==================================================
// > (MAIOR QUE)
// ==================================================

// Verifica se o valor da esquerda é maior que o da direita.

let idade = 20;

if (idade > 18) {
    console.log("Maior que 18.");
}


// ==================================================
// < (MENOR QUE)
// ==================================================

// Verifica se o valor da esquerda é menor que o da direita.

let temperatura = 12;

if (temperatura < 15) {
    console.log("Está frio.");
}


// ==================================================
// >= (MAIOR OU IGUAL)
// ==================================================

// Verifica se o valor é maior OU igual.

let nota = 7;

if (nota >= 7) {
    console.log("Aprovado.");
}


// ==================================================
// <= (MENOR OU IGUAL)
// ==================================================

// Verifica se o valor é menor OU igual.

let estoque = 5;

if (estoque <= 5) {
    console.log("Estoque baixo.");
}


// ==================================================
// == (IGUAL)
// ==================================================

// Compara apenas o valor.
// O JavaScript pode converter os tipos automaticamente.
// Não é recomendado usar.

console.log(5 == "5"); // true

// 5 (número)
// "5" (texto)
// Mesmo sendo tipos diferentes, o resultado é true.


// ==================================================
// === (EXATAMENTE IGUAL)
// ==================================================

// Compara o valor E o tipo.
// É o operador mais recomendado.

console.log(5 === 5);      // true
console.log(5 === "5");    // false

// 5 é Number
// "5" é String


// ==================================================
// != (DIFERENTE)
// ==================================================

// Verifica se os valores são diferentes.
// Também faz conversão de tipos.
// Não é recomendado.

console.log(5 != "5"); // false


// ==================================================
// !== (TOTALMENTE DIFERENTE)
// ==================================================

// Compara valor e tipo.
// É o operador recomendado.

console.log(5 !== "5"); // true
console.log(5 !== 5);   // false


// ==================================================
// EXEMPLOS PRÁTICOS
// ==================================================

// Maior que

let idadePessoa = 25;

if (idadePessoa > 18) {
    console.log("Pode entrar.");
}


// Menor que

let velocidade = 40;

if (velocidade < 60) {
    console.log("Velocidade permitida.");
}


// Igual

let senha = "1234";

if (senha === "1234") {
    console.log("Senha correta.");
}


// Diferente

let resposta = "não";

if (resposta !== "sim") {
    console.log("Resposta incorreta.");
}


// ==================================================
// RESUMÃO
// ==================================================

// >    = maior que
// <    = menor que
// >=   = maior ou igual
// <=   = menor ou igual

// ==   = igual (não recomendado)
// ===  = exatamente igual (recomendado)

// !=   = diferente (não recomendado)
// !==  = totalmente diferente (recomendado)


// ==================================================
// DICA PARA PROVAS
// ==================================================

// Prefira SEMPRE utilizar:

// ===
// !==

// Evite utilizar:

// ==
// !=

// Porque === e !== comparam tanto o valor quanto o tipo da variável.

