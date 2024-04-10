/*
Questão 11: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é um bebê, criança, adolescente, adulto ou idoso. A 
variável idade contém a idade da pessoa. Atribua o resultado à variável 
categoria. 
*/

let idade = 20;
let resultado = (idade >= 0 && idade <= 1) ? "Bebê" : (idade >= 2 && idade <= 12) ? "Criança" : (idade >= 13 && idade <= 17) ? "Adolescente" : (idade >= 18 && idade <= 60) ? "Adulto" : "Idoso";
console.log(resultado);