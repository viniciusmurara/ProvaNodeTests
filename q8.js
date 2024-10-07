// q8.js
/**
 * Questão 8: Contar vogais em uma string
 *
 * Implemente uma função chamada contarVogais que receba uma string como parâmetro
 * e retorne um objeto onde as chaves são as vogais encontradas na string (a, e, i, o, u)
 * e os valores são o número de vezes que cada vogal aparece na string.
 *
 * Requisitos:
 * 1. A contagem deve ser case-insensitive (ignorando maiúsculas e minúsculas).
 * 2. Se não houver vogais na string, retorne um objeto vazio.
 *
 * Exemplo:
 * const resultado = contarVogais("Desenvolvimento Web e Mobile");
 * console.log(resultado);
 * // Deve imprimir algo como:
 * // { e: 6, o: 2, i: 2 }
 *
 * Observação: Apenas as vogais (a, e, i, o, u) devem ser consideradas.
 */

function contarVogais(string){
    const objeto = {};
    string = string.toLowerCase();
    
    for(let i = 0; i < string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            if (objeto.hasOwnProperty(string[i])) {
                objeto[string[i]]++;
            } else {
                objeto[string[i]] = 1;
            }
        }
    }

    for(let i = 0; i < string.length; i++){
        if(objeto[string[i]] == 1){
            delete objeto[string[i]];
        }
    }
    return objeto;
}

module.exports = contarVogais;