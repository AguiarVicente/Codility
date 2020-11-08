/**
 * PORTUGUES
 * Criar uma função para encontrar a sequência mais longa s=de zeros em uma representação binária de um inteiro
 * Converte-se o parâmetro para um binário
 * Criar duas variáveis para armazenar o Gap e acumular a quantidade de zeros
 * Criar um laço para iterar a string binária e aumular o gap de zeros
 * Retornar a quantidade maior do Gap
 * 
 * ESPANHOL
 * Cree una función para encontrar la secuencia más larga s = de ceros en una representación binaria de un número entero
 * Convierte el parámetro en binario
 * Crea dos variables para almacenar el espacio y acumular la cantidad de ceros
 * Crea un bucle para iterar la cadena binaria y aumentar la brecha de ceros
 * Devuelve la mayor cantidad de Gap
 * 
 * INGLISH
 * Create a function to find the longest sequence s = of zeros in a binary representation of an integer
 * Converts the parameter to a binary
 * Create two variables to store the gap and accumulate the amount of zeros
 * Create a loop to iterate the binary string and increase the gap of zeros
 * Return the largest amount of Gap
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