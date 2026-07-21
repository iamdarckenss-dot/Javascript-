
// ==================================================
// CONDICIONAIS (IF / ELSE / ELSE IF)
// ==================================================

// As condicionais servem para tomar decisões.
// O JavaScript verifica uma condição e escolhe qual código executar.


// ==================================================
// IF
// ==================================================

// if = "se"

// Executa o código apenas se a condição for verdadeira.

let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade.");
}


// Estrutura:

/*

if (condicao) {
    // código
}

*/


// ==================================================
// ELSE
// ==================================================

// else = "senão"

// Executa quando a condição do if for falsa.

let usuario = false;

if (usuario) {
    console.log("Bem-vindo.");
} else {
    console.log("Usuário não conectado.");
}


// Estrutura:

/*

if (condicao) {

} else {

}

*/


// ==================================================
// ELSE IF
// ==================================================

// else if = "senão, se"

// Serve para testar várias condições.

let nota = 7.5;

if (nota >= 9) {
    console.log("Excelente.");
} else if (nota >= 7) {
    console.log("Aprovado.");
} else if (nota >= 5) {
    console.log("Recuperação.");
} else {
    console.log("Reprovado.");
}


// O JavaScript verifica de cima para baixo.
// Quando encontra uma condição verdadeira,
// ele ignora todas as próximas.


// ==================================================
// OPERADORES DE COMPARAÇÃO
// ==================================================

// >   = maior que
// <   = menor que
// >=  = maior ou igual
// <=  = menor ou igual
// ==  = igual (não recomendado)
// === = exatamente igual (valor e tipo)
// !=  = diferente (não recomendado)
// !== = totalmente diferente (valor e tipo)


// Exemplos:

let numero = 10;

if (numero > 5) {
    console.log("Maior que 5.");
}

if (numero < 20) {
    console.log("Menor que 20.");
}

if (numero === 10) {
    console.log("É exatamente 10.");
}

if (numero !== 15) {
    console.log("É diferente de 15.");
}


// ==================================================
// OPERADORES LÓGICOS
// ==================================================

// && = E
// Todas as condições precisam ser verdadeiras.

let idadePessoa = 20;
let documento = true;

if (idadePessoa >= 18 && documento) {
    console.log("Entrada permitida.");
}


// || = OU
// Apenas uma condição precisa ser verdadeira.

let ingresso = false;
let lista = true;

if (ingresso || lista) {
    console.log("Entrada permitida.");
}


// ! = NÃO
// Inverte true para false e false para true.

let bloqueado = false;

if (!bloqueado) {
    console.log("Acesso permitido.");
}


// ==================================================
// TRUE E FALSE
// ==================================================

// true  = verdadeiro
// false = falso

let logado = true;

if (logado) {
    console.log("Usuário conectado.");
}


// Também podemos escrever:

if (logado === true) {
    console.log("Usuário conectado.");
}


// ==================================================
// ORDEM DAS CONDIÇÕES
// ==================================================

// Sempre coloque a condição mais específica primeiro.

let media = 10;

if (media >= 9) {
    console.log("Excelente.");
} else if (media >= 7) {
    console.log("Aprovado.");
}


// Errado:

/*

if (media >= 5) {
    console.log("Aprovado.");
} else if (media >= 9) {
    console.log("Excelente.");
}

*/

// O 9 também é maior que 5.
// Então o JavaScript nunca chegará no else if.


// ==================================================
// IF DENTRO DE IF
// ==================================================

// Podemos colocar um if dentro de outro.

let login = true;
let admin = true;

if (login) {

    if (admin) {
        console.log("Painel do administrador.");
    }

}


// ==================================================
// TERNÁRIO
// ==================================================

// Forma resumida do if e else.

// ? = verdadeiro
// : = falso

let idadeAluno = 18;

let mensagem = idadeAluno >= 18
    ? "Maior de idade."
    : "Menor de idade.";

console.log(mensagem);


// Equivale a:

if (idadeAluno >= 18) {
    console.log("Maior de idade.");
} else {
    console.log("Menor de idade.");
}


// ==================================================
// EXEMPLOS RÁPIDOS
// ==================================================


// Positivo ou negativo

let valor = -5;

if (valor > 0) {
    console.log("Positivo.");
} else {
    console.log("Negativo.");
}


// Número par

let numeroPar = 8;

if (numeroPar % 2 === 0) {
    console.log("Par.");
} else {
    console.log("Ímpar.");
}


// Login

let email = "admin";
let senha = "123";

if (email === "admin" && senha === "123") {
    console.log("Login realizado.");
} else {
    console.log("Login incorreto.");
}


// Campo vazio

let nome = "";

if (!nome) {
    console.log("Digite seu nome.");
}


// ==================================================
// RESUMÃO
// ==================================================

// if       = se
// else     = senão
// else if  = senão, se

// >        = maior que
// <        = menor que
// >=       = maior ou igual
// <=       = menor ou igual
// ===      = exatamente igual
// !==      = diferente

// &&       = E
// ||       = OU
// !        = NÃO

// true     = verdadeiro
// false    = falso

// ?        = se verdadeiro (ternário)
// :        = se falso (ternário)


// ==================================================
// QUANDO USAR
// ==================================================

// if
// Quando existe apenas uma condição.

// if + else
// Quando existem duas possibilidades.

// if + else if + else
// Quando existem várias possibilidades.

// ternário
// Quando a condição é pequena e simples.

