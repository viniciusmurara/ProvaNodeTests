// q10.js
/**
 * Questão 10: Manipulação de Array de Palavras
 *
 * Implemente uma função chamada manipularArrayPalavras que recebe um array de strings como parâmetro.
 * Esta função deve realizar uma série de operações no array e retornar um objeto com os resultados.
 *
 * Requisitos:
 * a) Crie uma cópia do array original.
 * b) Converta todas as palavras da cópia para letras maiúsculas.
 * c) Adicione a palavra "INÍCIO" no início da cópia do array.
 * d) Adicione a palavra "FIM" no final da cópia do array.
 * e) Encontre a palavra mais longa na cópia do array.
 * f) Crie um novo array apenas com as palavras que começam com a letra "A".
 *
 * Exemplo de uso:
 * const palavras = ["casa", "arvore", "carro", "aviao"];
 *   Exporte esses objetos:
 *   return {
 *   arrayOriginal: palavras,
 *   arrayCopia: arrayCopia,
 *   palavraMaisLonga: palavraMaisLonga,
 *   palavrasComA: palavrasComA
 * };
 *
 */

function manipularArrayPalavras(palavras){
    // a) e b)
    copiaArray = [];
    palavras.forEach(element => {
        copiaArray.push(element.toUpperCase());
    });

    // c)
    copiaArray.unshift("INÍCIO");

    // d)
    copiaArray.push("FIM");

    // e)
    let palavraMaisLonga = "";
    let maiorQntdLetras = 0;
    copiaArray.forEach(element => {
        if(element.length > maiorQntdLetras){
            maiorQntdLetras = element.length;
            palavraMaisLonga = element;
        }
    });

    // f)
    let palavrasComA = copiaArray.filter(element => {
        return element[0] === "A";
    })

    return {
       arrayOriginal: palavras,
       arrayCopia: copiaArray,
       palavraMaisLonga: palavraMaisLonga,
       palavrasComA: palavrasComA
    };
}

module.exports = manipularArrayPalavras;