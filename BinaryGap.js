/**
 * Criar uma função para encontrar a sequência mais longa s=de zeros em uma representação binária de um inteiro
 * Converte-se o parâmetro para um binário
 * Criar duas variáveis para armazenar o Gap e acumular a quantidade de zeros
 * Criar um laço para iterar a string binária e aumular o gap de zeros
 * Retornar a quantidade maior do Gap * 
 */
function solution(N){
    let binary = N.toString(2)
    gap = 0
    currentGap = 0

    for(let x = 0; x < binary.length; x++){
        if(binary[x] == '0'){
            currentGap += 1
        }else{
            gap = Math.max(gap, currentGap)
            currentGap = 0
        }
    }

    return gap
}

console.log(`9 -> ${solution(9)}`) //2
console.log(`20 -> ${solution(20)}`) // 1
console.log(`529 -> ${solution(529)}`) // 4
console.log(`15 -> ${solution(15)}`) // 0
console.log(`32 -> ${solution(32)}`) // 0