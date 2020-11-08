# Desafios Codility

- [PORTUGUES](https://github.com/AguiarVicente/Codility/blob/main/Portugues.md)
- [INGLISH](https://github.com/AguiarVicente/Codility/blob/main/Ingles.md)
- [SPANISH](https://github.com/AguiarVicente/Codility/blob/main/Espanhol.md)

### Lição 1
__Encontrar a sequência mais longa de zeros na representação binária de um inteiro.__
- [BinaryGap](https://github.com/AguiarVicente/Codility/blob/main/BinaryGap.js)

Uma lacuna binária dentro de um número inteiro positivo N é qualquer sequência máxima de zeros consecutivos que é cercada por uns em ambas as extremidades na representação binária de N.

Por exemplo, o número 9 tem representação binária 1001 e contém uma lacuna binária de comprimento 2. O número 529 tem representação binária 1000010001 e contém duas lacunas binárias: uma de comprimento 4 e outra de comprimento 3. O número 20 tem representação binária de 10100 e contém uma lacuna binária de comprimento 1. O número 15 tem representação binária 1111 e não tem lacunas binárias. O número 32 tem representação binária 100000 e não tem lacunas binárias.

Escreva uma função:

```js
function solution(N);
```

que, dado um inteiro positivo N, retorna o comprimento de seu maior intervalo binário. A função deve retornar 0 se N não contiver uma lacuna binária.

Por exemplo, dado N = 1041, a função deve retornar 5, porque N tem representação binária 10000010001 e, portanto, seu maior intervalo binário é de comprimento 5. Dado N = 32, a função deve retornar 0, porque N tem representação binária '100000' e, portanto, sem lacunas binárias.

Escreva um algoritmo eficiente para as seguintes suposições:

N é um número inteiro dentro do intervalo [1..2,147,483,647].
___

### Lição 2
__Gire uma matriz para a direita por um determinado número de etapas.__
- [CyclicRotation](https://github.com/AguiarVicente/Codility/blob/main/CyclicRotation.js)

Um array A consistindo de N inteiros é fornecido. A rotação da matriz significa que cada elemento é deslocado para a direita em um índice e o último elemento da matriz é movido para o primeiro lugar. Por exemplo, a rotação da matriz A = [3, 8, 9, 7, 6] é [6, 3, 8, 9, 7] (os elementos são deslocados para a direita em um índice e 6 é movido para o primeiro lugar).

O objetivo é girar a matriz A K vezes; ou seja, cada elemento de A será deslocado para a direita K vezes.

Escreva uma função:

```js
function solution(A, K);
```

que, dado um array A consistindo em N inteiros e um inteiro K, retorna o array A girado K vezes.

Por exemplo, dado

    A = [3, 8, 9, 7, 6]
    K = 3
a função deve retornar [9, 7, 6, 3, 8]. Três rotações foram feitas:

    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
Para outro exemplo, dado

    A = [0, 0, 0]
    K = 1
a função deve retornar [0, 0, 0]

Dado

    A = [1, 2, 3, 4]
    K = 4
a função deve retornar [1, 2, 3, 4]

Assuma isso:

N e K são inteiros dentro do intervalo [0..100];
cada elemento da matriz A é um número inteiro dentro do intervalo [−1.000..1.000].
Em sua solução, concentre-se na correção. O desempenho de sua solução não será o foco da avaliação.