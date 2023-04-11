// 피자 나눠 먹기 (1)

// const solution = (n) => {
//     let count = 1;

//     while (true) {
//         if (7 * count >= n) break
//         count++;
//     }

//     return count
// }

const solution = (n) => {
    return Math.ceil(n / 7)
}


console.log(solution(15));
console.log(solution(1));
console.log(solution(7));

