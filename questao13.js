/*
Questão 13: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é elegível para a aposentadoria. A variável idade 
contém a idade da pessoa e a variável sexo indica o sexo ( 'masculino' ou 
'feminino'). Atribua o resultado à variável elegivel. 
*/

let idade = 62;
let sexo = "feminino";
let resultado = (idade >= 65 && sexo == "masculino" || idade >= 62 && sexo == "feminino") ? "Elegível" : "Não elegível";
console.log(resultado);