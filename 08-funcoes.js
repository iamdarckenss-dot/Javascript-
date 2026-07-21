
// ==================================================
// FUNÇÕES (FUNCTIONS)
// ==================================================

// Funções servem para reutilizar código.
// Em vez de escrever o mesmo código várias vezes,
// criamos uma função e apenas chamamos quando precisar.


// ==================================================
// ESTRUTURA BÁSICA
// ==================================================

/*

function nomeDaFuncao() {

    // código

}

*/


// Exemplo:

function saudacao() {

    console.log("Olá, mundo!");

}

// Para executar a função:
saudacao();


// ==================================================
// CHAMANDO UMA FUNÇÃO
// ==================================================

// A função só executa quando é chamada.

function mensagem() {

    console.log("Bem-vindo ao sistema.");

}

mensagem();


// ==================================================
// PARÂMETROS
// ==================================================

// Parâmetros são informações que a função recebe.

function apresentar(nome) {

    console.log("Olá " + nome);

}

apresentar("João");
apresentar("Maria");


// Estrutura:

/*

function nomeDaFuncao(parametro){

}

*/


// ==================================================
// MAIS DE UM PARÂMETRO
// ==================================================

function soma(numero1, numero2) {

    console.log(numero1 + numero2);

}

soma(10, 5);
soma(20, 30);


// ==================================================
// RETURN
// ==================================================

// return devolve um valor.
// Depois do return, a função termina.

function multiplicar(a, b) {

    return a * b;

}

let resultado = multiplicar(5, 4);

console.log(resultado);


// Também podemos fazer:

console.log(multiplicar(8, 2));


// ==================================================
// DIFERENÇA ENTRE CONSOLE.LOG E RETURN
// ==================================================

// console.log() apenas mostra o valor na tela.

// return devolve o valor para ser usado depois.

function dobro(numero) {

    return numero * 2;

}

let valor = dobro(10);

console.log(valor);


// ==================================================
// FUNÇÃO SEM PARÂMETROS
// ==================================================

function boasVindas() {

    console.log("Bem-vindo!");

}

boasVindas();


// ==================================================
// FUNÇÃO COM IF
// ==================================================

function verificarIdade(idade) {

    if (idade >= 18) {

        console.log("Maior de idade.");

    } else {

        console.log("Menor de idade.");

    }

}

verificarIdade(20);
verificarIdade(15);


// ==================================================
// FUNÇÃO COM RETURN E IF
// ==================================================

function verificarNota(nota) {

    if (nota >= 7) {

        return "Aprovado";

    }

    return "Reprovado";

}

console.log(verificarNota(8));
console.log(verificarNota(5));


// ==================================================
// FUNÇÃO COM VÁRIOS PARÂMETROS
// ==================================================

function aluno(nome, nota) {

    console.log(nome + " tirou " + nota);

}

aluno("Lucas", 9);
aluno("Maria", 8);


// ==================================================
// ARROW FUNCTION
// ==================================================

// Forma moderna de criar funções.

const saudar = () => {

    console.log("Olá!");

};

saudar();


// Com parâmetros

const somar = (a, b) => {

    return a + b;

};

console.log(somar(5, 6));


// Quando existe apenas uma linha,
// podemos escrever assim:

const triplo = numero => numero * 3;

console.log(triplo(4));


// ==================================================
// ESCOPO
// ==================================================

// Variáveis criadas dentro da função
// só existem dentro dela.

function teste() {

    let mensagemInterna = "Olá";

    console.log(mensagemInterna);

}

teste();

// console.log(mensagemInterna); // Erro


// ==================================================
// EXEMPLOS PRÁTICOS
// ==================================================

// Calculando média

function media(n1, n2) {

    return (n1 + n2) / 2;

}

console.log(media(8, 10));


// Verificando número par

function parOuImpar(numero) {

    if (numero % 2 === 0) {

        return "Par";

    }

    return "Ímpar";

}

console.log(parOuImpar(8));
console.log(parOuImpar(5));


// Login

function login(usuario, senha) {

    if (usuario === "admin" && senha === "123") {

        return "Login realizado.";

    }

    return "Login incorreto.";

}

console.log(login("admin", "123"));


// ==================================================
// RESUMÃO
// ==================================================

// function = cria uma função

// () = recebe parâmetros

// {} = bloco da função

// parâmetro = variável que a função recebe

// argumento = valor enviado para o parâmetro

// return = devolve um valor

// console.log() = mostra uma informação

// função = reutiliza código

// arrow function = forma moderna de criar funções


// ==================================================
// MODELO PARA COPIAR
// ==================================================

function nomeDaFuncao(parametro) {

    // código

    return parametro;

}

nomeDaFuncao(valor);


// ==================================================
// QUANDO USAR FUNÇÕES
// ==================================================

// Quando um código será reutilizado.

// Para organizar o programa.

// Para evitar repetir o mesmo código.

// Para separar cada tarefa do programa.


// Exemplos:

// calcular média

// fazer login

// verificar idade

// validar formulário

// calcular desconto

// verificar resposta de um quiz

// ==================================================
// NUMBER()
// ==================================================

// Number() é uma função pronta do JavaScript.

// Ela converte um valor para Number (número).

console.log(Number("10"));      // 10
console.log(Number("5.5"));     // 5.5
console.log(Number("abc"));     // NaN


// "10" é uma String
// Number("10") transforma em Number.

// ==================================================
// O QUE É NaN
// ==================================================

// NaN significa:
//
// Not a Number
//
// Ou seja:
//
// "Não é um número."

console.log(Number("Lucas")); // NaN
console.log(Number("Casa"));  // NaN
console.log(Number("abc"));   // NaN

// ==================================================
// Number.isNaN()
// ==================================================

// Serve para verificar se um valor é NaN.

console.log(Number.isNaN(10));       // false
console.log(Number.isNaN("Lucas"));  // false
console.log(Number.isNaN(NaN));      // true

function multiplicar(a, b) {

    a = Number(a);
    b = Number(b);

    if (Number.isNaN(a)) {

        document.body.innerHTML = "Número inválido";

        return;

    }

    if (Number.isNaN(b)) {

        document.body.innerHTML = "Número inválido";

        return;

    }

    document.body.innerHTML = a * b;

}