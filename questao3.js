/*
Questão 3: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa pode dirigir ou não. A variável idade contém a idade 
da pessoa. Atribua o resultado à variável permissao.
*/

let idade = 16;
let permissao = (idade >= 18) ? "Já pode dirigir" : "Não pode dirigir";
console.log(permissao);