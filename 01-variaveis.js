// comentário no javascript
// variaveis são espaços na memória do computador que armazenam valores para serem utilizados posteriormente no código.



 // no javascript, podemos declarar variáveis utilizando as palavras-chave var, let e const.

 // 1 - conts - cria uma variável que não pode ser reatribuída, ou seja, seu valor não pode ser alterado após a sua declaração.

 const nome = "João"; // constante, não pode ser reatribuída
 console.log(nome); // imprime "João" no console
 const PI = 3.14159; // constante, não pode ser reatribuída
 console.log(PI); // imprime "3.14159" no console

 // Redeclarando uma variavel, e o ato de trocar o seu valor, não é permitido com const, pois ela é uma constante.
 // nome = "Maria"; // isso vai gerar um erro, pois não podemos reatribuir uma constante

 // 2 - let - cria uma variável que pode ser reatribuída, ou seja, seu valor pode ser alterado após a sua declaração.
 let nomeDaPessoa = "Maria"; // variável, pode ser reatribuída

 // Redeclarando uma variavel, e o ato de trocar o seu valor, é permitido com let, pois ela é uma variável.
 nomeDaPessoa = "Ana"; // isso é permitido
 console.log(nomeDaPessoa); // imprime "Ana" no console

 // 3 - var - cria uma variável que pode ser reatribuída, ou seja, seu valor pode ser alterado após a sua declaração.
 var fruta = "Banana"; // variável, pode ser reatribuída
 console.log(fruta); // imprime "Banana" no console

 // var e a forma mais antiga de declarar variáveis no javascript, e não é recomendada para uso em projetos modernos, pois pode gerar problemas de escopo e hoisting.
