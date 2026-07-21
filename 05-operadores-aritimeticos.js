
// ==================================================
// OPERADORES ARITMÉTICOS
// ==================================================

// Os operadores aritméticos servem para realizar
// cálculos matemáticos.


// ==================================================
// + (SOMA)
// ==================================================

// Soma dois números.

let a = 10;
let b = 5;

console.log(a + b); // 15


// Também serve para juntar textos (concatenação).

let nome = "João";
let sobrenome = "Silva";

console.log(nome + " " + sobrenome);

// Resultado:
// João Silva


// ==================================================
// - (SUBTRAÇÃO)
// ==================================================

// Subtrai um valor do outro.

let numero1 = 20;
let numero2 = 8;

console.log(numero1 - numero2); // 12


// ==================================================
// * (MULTIPLICAÇÃO)
// ==================================================

// Multiplica os valores.

let largura = 5;
let altura = 8;

console.log(largura * altura); // 40


// ==================================================
// / (DIVISÃO)
// ==================================================

// Divide um número pelo outro.

let total = 20;
let pessoas = 4;

console.log(total / pessoas); // 5


// ==================================================
// % (RESTO DA DIVISÃO)
// ==================================================

// Retorna apenas o resto da divisão.

// Muito usado para descobrir
// se um número é par ou ímpar.

console.log(10 % 2); // 0

console.log(9 % 2); // 1


// Exemplo:

let numero = 8;

if (numero % 2 === 0) {

    console.log("Número par.");

} else {

    console.log("Número ímpar.");

}


// ==================================================
// ** (POTÊNCIA)
// ==================================================

// Eleva um número a outro.

console.log(2 ** 3); // 8

// 2³ = 8


// ==================================================
// ++ (INCREMENTO)
// ==================================================

// Adiciona +1 na variável.

let contador = 0;

contador++;

console.log(contador); // 1

contador++;

console.log(contador); // 2


// É o mesmo que:

contador = contador + 1;


// ==================================================
// -- (DECREMENTO)
// ==================================================

// Remove 1 da variável.

let vidas = 5;

vidas--;

console.log(vidas); // 4

vidas--;

console.log(vidas); // 3


// É o mesmo que:

vidas = vidas - 1;


// ==================================================
// += (SOMA E ATRIBUIÇÃO)
// ==================================================

// Soma e já guarda o novo valor.

let pontos = 10;

pontos += 5;

console.log(pontos); // 15


// Equivale a:

pontos = pontos + 5;


// ==================================================
// -= (SUBTRAÇÃO E ATRIBUIÇÃO)
// ==================================================

let dinheiro = 100;

dinheiro -= 20;

console.log(dinheiro); // 80


// Equivale a:

dinheiro = dinheiro - 20;


// ==================================================
// *= (MULTIPLICAÇÃO E ATRIBUIÇÃO)
// ==================================================

let xp = 10;

xp *= 3;

console.log(xp); // 30


// Equivale a:

xp = xp * 3;


// ==================================================
// /= (DIVISÃO E ATRIBUIÇÃO)
// ==================================================

let moedas = 100;

moedas /= 2;

console.log(moedas); // 50


// Equivale a:

moedas = moedas / 2;


// ==================================================
// %= (RESTO E ATRIBUIÇÃO)
// ==================================================

let valor = 11;

valor %= 2;

console.log(valor); // 1


// Equivale a:

valor = valor % 2;


// ==================================================
// ORDEM DAS OPERAÇÕES
// ==================================================

// O JavaScript segue a prioridade da matemática.

// 1° ( )
// 2° **
// 3° *  /  %
// 4° +  -

console.log(2 + 3 * 5);

// Resultado:

// 17


// Primeiro:

// 3 * 5 = 15

// Depois:

// 15 + 2 = 17


// Usando parênteses:

console.log((2 + 3) * 5);

// Resultado:

// 25


// ==================================================
// EXEMPLOS PRÁTICOS
// ==================================================


// Média

let nota1 = 8;
let nota2 = 6;

let media = (nota1 + nota2) / 2;

console.log(media);


// Área do retângulo

let base = 10;
let alturaRetangulo = 4;

console.log(base * alturaRetangulo);


// Dobro

let numeroDobro = 8;

console.log(numeroDobro * 2);


// Metade

let numeroMetade = 20;

console.log(numeroMetade / 2);


// Quadrado

let numeroQuadrado = 6;

console.log(numeroQuadrado ** 2);


// ==================================================
// RESUMÃO
// ==================================================

// +   = soma

// -   = subtração

// *   = multiplicação

// /   = divisão

// %   = resto da divisão

// **  = potência

// ++  = adiciona 1

// --  = remove 1

// +=  = soma e salva

// -=  = subtrai e salva

// *=  = multiplica e salva

// /=  = divide e salva

// %=  = resto e salva


// ==================================================
// DICAS PARA PROVA
// ==================================================

// %  -> descobrir se um número é par ou ímpar.

// ++ -> contador.

// -- -> diminuir contador.

// += -> acumular pontos.

// -= -> gastar dinheiro.

// * -> calcular área.

// / -> calcular média.

// ** -> potência.

