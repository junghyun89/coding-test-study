// 짝수의 합

// const solution = (n) => {
//     let answer = 0;

//     for (let i = 0; i <= n; i += 2) {
//         answer += i;
//     }
    
//     return answer;
// }


const solution = (n) => {
    return Array(n).fill().map((x, i) => i+1).filter(x => x % 2 === 0).reduce((acc, cur) => acc + cur, 0)
}

console.log(solution(10));
