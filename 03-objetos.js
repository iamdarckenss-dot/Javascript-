
// ==================================================
// OBJETOS (OBJECTS)
// ==================================================

// Objetos servem para armazenar várias informações
// relacionadas em uma única variável.

// Um objeto é formado por:
// chave : valor

// Exemplo:

let pessoa = {
    nome: "João",
    idade: 18,
    cidade: "São Paulo"
};


// ==================================================
// ESTRUTURA
// ==================================================

/*

let nomeDoObjeto = {

    chave: valor,
    chave: valor,
    chave: valor

}

*/


// ==================================================
// ACESSANDO INFORMAÇÕES
// ==================================================

// Podemos acessar usando o ponto .

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);


// Resultado:

// João
// 18
// São Paulo


// Também podemos usar colchetes []

console.log(pessoa["nome"]);
console.log(pessoa["idade"]);


// ==================================================
// ALTERANDO UM VALOR
// ==================================================

pessoa.idade = 19;

console.log(pessoa.idade);


// ==================================================
// ADICIONANDO UMA NOVA PROPRIEDADE
// ==================================================

pessoa.profissao = "Programador";

console.log(pessoa);


// ==================================================
// REMOVENDO UMA PROPRIEDADE
// ==================================================

delete pessoa.cidade;

console.log(pessoa);


// ==================================================
// OBJETOS COM DIFERENTES TIPOS
// ==================================================

let aluno = {

    nome: "Maria",

    idade: 16,

    aprovado: true,

    nota: 8.5

};

console.log(aluno);


// ==================================================
// OBJETO DENTRO DE OBJETO
// ==================================================

let usuario = {

    nome: "Carlos",

    endereco: {

        cidade: "São Paulo",

        bairro: "Centro"

    }

};

console.log(usuario.endereco.cidade);
console.log(usuario.endereco.bairro);


// ==================================================
// ARRAY DE OBJETOS
// ==================================================

// Muito utilizado em bancos de dados
// APIs
// Sistemas
// Jogos

let alunos = [

    {
        nome: "João",
        nota: 8
    },

    {
        nome: "Maria",
        nota: 9
    },

    {
        nome: "Pedro",
        nota: 7
    }

];

console.log(alunos[0].nome);
console.log(alunos[1].nota);


// ==================================================
// MÉTODOS
// ==================================================

// Um método é uma função dentro de um objeto.

let carro = {

    marca: "Toyota",

    modelo: "Corolla",

    ligar: function () {

        console.log("O carro foi ligado.");

    }

};

carro.ligar();


// ==================================================
// THIS
// ==================================================

// this representa o próprio objeto.

let pessoa2 = {

    nome: "Ana",

    apresentar: function () {

        console.log("Olá, meu nome é " + this.nome);

    }

};

pessoa2.apresentar();


// Resultado:

// Olá, meu nome é Ana


// ==================================================
// EXEMPLO PRÁTICO
// ==================================================

let produto = {

    nome: "Notebook",

    preco: 3500,

    estoque: 8

};

if (produto.estoque > 0) {

    console.log("Produto disponível.");

} else {

    console.log("Produto esgotado.");

}


// ==================================================
// RESUMÃO
// ==================================================

// {} = cria um objeto

// chave: valor = propriedade do objeto

// . = acessa uma propriedade

// [] = outra forma de acessar uma propriedade

// objeto.propriedade = altera ou adiciona um valor

// delete = remove uma propriedade

// function() = cria um método

// this = representa o próprio objeto


// ==================================================
// EXEMPLO COMPLETO
// ==================================================

let professor = {

    nome: "Lucas",

    materia: "JavaScript",

    idade: 28,

    ativo: true,

    ensinar: function () {

        console.log(this.nome + " está ensinando " + this.materia);

    }

};

console.log(professor.nome);
console.log(professor.materia);
console.log(professor.idade);

professor.ensinar();


// ==================================================
// QUANDO USAR OBJETOS
// ==================================================

// Quando uma variável precisa guardar
// várias informações relacionadas.

// Exemplo:

// Pessoa
// Produto
// Carro
// Livro
// Usuário
// Aluno
// Funcionário
// Cliente

