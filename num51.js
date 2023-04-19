// Two Printers

// const solution = (X, Y, N) => {
//     const result = [];

//     for (let i = 1; i <= N; i++) {
//         result.push(X * i, Y * i);
//     }

//     return result.sort((a, b) => a - b)[N-1]
// }

const solution = (X, Y, N) => {
    let time = 1;

    while (true) {
        if (Math.floor(time / X) + Math.floor(time / Y) >= N) {
            return time
        }
        time++;
    }
}

console.log(solution(1, 1, 5));
console.log(solution(3, 5, 4));

