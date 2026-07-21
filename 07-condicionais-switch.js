
// ==================================================
// SWITCH / CASE
// ==================================================

// O switch é usado quando precisamos verificar
// se uma variável é igual a um entre vários valores.

// Estrutura básica:

/*

switch (variavel) {
    case valor1:
        // código executado se a variável for igual ao valor1
        break;

    case valor2:
        // código executado se a variável for igual ao valor2
        break;

    default:
        // código executado se nenhum case for atendido
}

*/


let dia = 14;

switch (dia) {
    case 14:
        document.body.innerHTML = "Terça-feira.";
        break;

        // break interrompe o switch.
        // Sem o break, os próximos cases também podem ser executados.

    case 15:
        document.body.innerHTML = "Quarta-feira. Aula de projeto.";
        break;

    case 16:
        document.body.innerHTML = "Quinta-feira. Aula de JavaScript.";
        break;

    default:
        // default funciona como um plano B.
        // É executado quando nenhum case corresponde ao valor da variável.

        document.body.innerHTML = "Dia não encontrado.";
}


// ==================================================
// RESUMO RÁPIDO
// ==================================================

// switch  = inicia a comparação da variável.
// case    = representa cada valor possível.
// break   = interrompe o switch.
// default = executa caso nenhum case seja atendido.


// O switch utiliza comparação estrita, como o ===.

// Exemplo:

let opcao = "perfil";

switch (opcao) {
    case "inicio":
        console.log("Abrindo início.");
        break;

    case "perfil":
        console.log("Abrindo perfil.");
        break;

    case "cursos":
        console.log("Abrindo cursos.");
        break;

    default:
        console.log("Opção inválida.");
}


// ==================================================
// SWITCH SEM BREAK
// ==================================================

let numero = 1;

switch (numero) {
    case 1:
        console.log("Número 1.");

    case 2:
        console.log("Número 2.");

    case 3:
        console.log("Número 3.");
}


// Como não existem breaks, o resultado será:

// Número 1.
// Número 2.
// Número 3.


// ==================================================
// VÁRIOS CASES COM O MESMO RESULTADO
// ==================================================

let diaSemana = "sábado";

switch (diaSemana) {
    case "sábado":
    case "domingo":
        // Os dois cases executam o mesmo código.
        console.log("Final de semana.");
        break;

    default:
        console.log("Dia útil.");
}


// ==================================================
// QUANDO USAR SWITCH
// ==================================================

// Use switch quando:
// A mesma variável for comparada com vários valores exatos.
// Existirem várias opções fixas.
// Estiver criando menus, dias da semana ou categorias.

// Use if e else quando:
// Precisar usar maior que, menor que ou intervalos.
// Precisar combinar condições com && ou ||.


// Exemplo indicado para switch:

let materia = "Português";

switch (materia) {
    case "Matemática":
        console.log("Abrindo Matemática.");
        break;

    case "Português":
        console.log("Abrindo Português.");
        break;

    default:
        console.log("Matéria não encontrada.");
}


// Exemplo indicado para if:

let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade.");
} else {
    console.log("Menor de idade.");
}

