function solution(A, K){
    const total = A.length
    const result = []

    for(let x = 0; x < total; x++){
        const index = (x + K) % total
        result[index] = A[x]
    }
    return result
}
console.log(solution([3, 8, 9, 7, 6], 1))
console.log(solution([6, 3, 8, 9, 7], 1))
console.log(solution([7, 6, 3, 8, 9], 1))