// q7.js
/**
 * Questão 7: Unir e remover duplicados em dois arrays
 *
 * Implemente uma função chamada unirArrays que receba dois arrays como parâmetros
 * e retorne um novo array contendo todos os elementos dos dois arrays, sem elementos duplicados.
 *
 * Requisitos:
 * 1. O array resultante deve conter apenas elementos únicos (sem duplicatas).
 * 2. A ordem dos elementos deve seguir a ordem de aparecimento nos arrays originais.
 *
 * Exemplo de uso:
 * const resultado = unirArrays([1, 2, 3, 4], [3, 4, 5, 6]);
 * console.log(resultado); // Deve imprimir: [1, 2, 3, 4, 5, 6]
 */

function unirArrays(arr1, arr2) {
    let novoArray = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!novoArray.includes(arr1[i])) {
            novoArray.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!novoArray.includes(arr2[i])) {
            novoArray.push(arr2[i]);
        }
    }
    return novoArray;
}

module.exports = unirArrays;