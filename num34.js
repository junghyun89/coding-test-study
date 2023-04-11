// 저주의 숫자 3

// const solution = (n) => {
//     let answer = 0;
//     for (let i = 0; i < n; i++) {
//         answer += 1;
//         while (answer % 3 === 0 || answer.toString().includes('3')) {
//             answer += 1;
//         }
//     }

//     return answer
// }

// const solution = (n) => {
//     let answer = 1;
//     let count = 1;
    
//     for (let i = 1; count <= n; i++) {
//         if (i % 3 === 0 || i.toString().includes('3')) continue;
//         answer = i
//         count++
//     }
    
//     return answer;
// }

const solution = (n) => {
    let array = [];
    for (let i = 0; i < Infinity; i++) {
        if (array.length === n) break
        if (i % 3 === 0 || i.toString().includes('3')) continue
        array.push(i)
    }

    return array[n-1]
}

console.log(solution(15)); // 25


