/* 1)Exibir no console o resultado das seguintes validações, dado o valor da variável _numero:
   a)Se o valor for menor que zero, mostrar: O valor número é um Número negativo.    
   b)Se o valor for maior ou igual a zero, mostrar: O valor número é um Número positivo.*/

var a = -10
if (a < 0){
  console.log ("O valor número é um Número negativo.")
} else {
    console.log ("O valor número é um Número positivo.")
}
/*2)Criar uma função em javascript que receba três parâmetros numéricos valor A, valor B e valor C, validar se:
a)O (valor A  + valor C)  é maior que valorB
i) Se for, exibir no console os valores de valor A + Valor C e a soma deles.
ii) Se não for, exibir no console que os valores de valor A + Valor C é igual ao valor B.
*/
  
function valor (valorA,valorB,valorC) {
    if ((valorA + valorC) >= valorB ){
    return "A e B maior que C"
}
else 
    return "A e B menor que C"
}
console.log (valor(5+8+10))

/* 3) Os alunos da turma de Front-end estão estudando em horários diferentes:

a)Se o horário for o matutino, mostrar a mensagem "Bom Dia!".

b)Se o horário for vespertino, mostrar "Boa Tarde!".

c)Se o horário for noturno, mostrar "Boa Noite!".

d) Se não houver informação, mostrar  "Valor Inválido!". */

function turma(horario) {
    if (horario==='matutino') {
    return "bom dia";
    }
    else if (horario ==='vespertino')
    {
        return "boa tarde";
    } 
    else if (horario==='noturno') { 
        return "boa noite";
    } else { return "valor invalido"}
}
console.log (turma('vespertino'))
