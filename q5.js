// q5.js
/**
 * Questão 5: Análise de números pares e ímpares em um array
 *
 * Implemente uma função chamada analisaArray que recebe um array de números inteiros.
 * A função deve retornar um objeto contendo:
 * a) A quantidade de números pares
 * b) Quais são os números pares
 * c) A quantidade de números ímpares
 * d) Quais são os números ímpares
 *
 * Requisitos:
 * 1. A função deve aceitar apenas arrays de números inteiros.
 * 2. Se o array estiver vazio ou se algum dos valores não for um número inteiro, a função deve retornar null.
 * 3. O retorno deve ser um objeto com as seguintes propriedades:
 *    - quantidadePares: número de elementos pares
 *    - numerosPares: array contendo os números pares
 *    - quantidadeImpares: número de elementos ímpares
 *    - numerosImpares: array contendo os números ímpares
 *
 * Exemplos:
 * analisaArray([1, 2, 3, 4, 5]) deve retornar:
 * {
 *   quantidadePares: 2,
 *   numerosPares: [2, 4],
 *   quantidadeImpares: 3,
 *   numerosImpares: [1, 3, 5]
 * }
 *
 * analisaArray([10, 21, 32, 43]) deve retornar:
 * {
 *   quantidadePares: 2,
 *   numerosPares: [10, 32],
 *   quantidadeImpares: 2,
 *   numerosImpares: [21, 43]
 * }
 *
 * analisaArray([]) deve retornar null
 * analisaArray([2, 'a', 4]) deve retornar null
 */


function analisaArray(array){
    let verificaNum = true;
    array.forEach(element => {
        if(!Number.isInteger(element)){
            verificaNum = false;
        }
    });

    const obj = {};
    let contadorPares = 0;
    let contadorImpares = 0;
    let pares = [];
    let impares = [];

    if(array.length === 0 || !verificaNum){
        return null;
    } else{
        array.forEach(element => {
            if(element % 2 == 0){
                contadorPares++;
                pares.push(element);
            } else {
                contadorImpares++;
                impares.push(element);
            }
        });
    }

    obj.quantidadePares = contadorPares;
    obj.numerosPares = pares;
    obj.quantidadeImpares = contadorImpares;
    obj.numerosImpares = impares;

    return obj;
}

module.exports = analisaArray;