function carro(tipoCarro) {
    if (tipoCarro==='hatch') 
    {
        return "Compra efetuada com sucesso";
    }
    
    else if (tipoCarro === 'sedan'|| tipoCarro ==='motocicleta'||
    tipoCarro ==='caminhonete')
    {
        return "Tem certeza que não prefere este modelo?";
    } 
    else { return "Não trabalhamos com este tipo de automóvel aqui"}
}
console.log (carro('hatch'))
/* 3)Construa uma função que receba um número.
a)Se o número for  positivo, mostrar a informação de que ele é positivo.
b)Se o número for negativo, mostrar a informação de que ele é negativo.
*/
 function numero (valorNumero) {
     if (numero <= 0){
     return "o número é positivo"} else {
         return "o número é negativo"
     }
    
 } 
 console.log (numero (-15))
