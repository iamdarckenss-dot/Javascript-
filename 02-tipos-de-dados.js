
// ==================================================
// TIPOS DE DADOS (DATA TYPES)
// ==================================================

// Os tipos de dados definem o tipo de informação
// que uma variável pode armazenar.


// ==================================================
// STRING
// ==================================================

// String = texto.

// Pode ser escrita com:
// ""
// ''
// ``

let nome = "João";
let cidade = 'São Paulo';

console.log(nome);
console.log(cidade);


// ==================================================
// NUMBER
// ==================================================

// Number = números.
// Pode ser inteiro ou decimal.

let idade = 18;
let nota = 8.5;

console.log(idade);
console.log(nota);


// ==================================================
// BOOLEAN
// ==================================================

// Boolean possui apenas dois valores.

// true  = verdadeiro
// false = falso

let logado = true;
let bloqueado = false;

console.log(logado);
console.log(bloqueado);


// ==================================================
// UNDEFINED
// ==================================================

// A variável existe,
// mas ainda não recebeu nenhum valor.

let usuario;

console.log(usuario);


// Resultado:
// undefined


// ==================================================
// NULL
// ==================================================

// Representa ausência de valor.
// O valor foi definido manualmente.

let telefone = null;

console.log(telefone);


// ==================================================
// OBJECT
// ==================================================

// Object = objeto.

// Armazena várias informações
// dentro da mesma variável.

let pessoa = {

    nome: "Maria",

    idade: 17

};

console.log(pessoa);


// ==================================================
// ARRAY
// ==================================================

// Array é um tipo especial de objeto.
// Serve para armazenar vários valores.

let frutas = [

    "Maçã",

    "Banana",

    "Uva"

];

console.log(frutas);


// ==================================================
// FUNCTION
// ==================================================

// Function = função.

// É um bloco de código que pode ser executado.

function saudacao() {

    console.log("Olá!");

}

saudacao();


// ==================================================
// TYPEOF
// ==================================================

// typeof mostra o tipo de dado.

console.log(typeof "João");      // string

console.log(typeof 20);          // number

console.log(typeof true);        // boolean

console.log(typeof undefined);   // undefined

console.log(typeof null);        // object (erro histórico do JavaScript)

console.log(typeof {});          // object

console.log(typeof []);          // object

console.log(typeof function(){});// function


// ==================================================
// RESUMÃO
// ==================================================

// String     = texto

// Number     = números

// Boolean    = true ou false

// Undefined  = sem valor

// Null       = ausência de valor

// Object     = conjunto de propriedades

// Array      = lista de valores

// Function   = bloco de código reutilizável


// ==================================================
// EXEMPLOS
// ==================================================

let aluno = "Lucas";          // String

let idadeAluno = 17;          // Number

let aprovado = true;          // Boolean

let endereco;                 // Undefined

let cpf = null;               // Null

let carro = {                 // Object

    marca: "Toyota",

    modelo: "Corolla"

};

let notas = [                 // Array

    7,

    8,

    10

];

function media() {            // Function

    console.log("Calculando média...");

}


// ==================================================
// DICAS PARA PROVA
// ==================================================

// "Olá"      -> String

// 50         -> Number

// 10.5       -> Number

// true       -> Boolean

// false      -> Boolean

// undefined  -> Variável sem valor

// null       -> Valor vazio definido manualmente

// {}         -> Object

// []         -> Array

// function() -> Function


// ==================================================
// COMO IDENTIFICAR
// ==================================================

// Texto?             -> String

// Número?            -> Number

// Verdadeiro/Falso?  -> Boolean

// Lista?             -> Array

// Várias informações?-> Object

// Executa código?    -> Function
