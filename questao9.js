/*
Questão 9: Escreva um código JavaScript utilizando o operador ternário para 
determinar se um ano é bissexto. A variável ano contém o ano a ser verificado. 
Atribua o resultado à variável resultado.
*/

let ano = 1918;
let resultado = (ano % 4 == 0) ? "É um ano bissexto" : "Não é um ano bissexto";
console.log(resultado);