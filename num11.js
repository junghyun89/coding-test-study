// 짝수 홀수 개수

// const solution = (num_list) => {
//     let answer = [0, 0];

//     for (let i = 0; i < num_list.length; i++) {
//         (num_list[i] % 2 === 0) ? answer[0]++ : answer[1]++;
//     }

//     return answer
// }

const solution = (num_list) => {
    let answer = [0, 0];

    for (let i = 0; i < num_list.length; i++) {
        answer[num_list[i] % 2]++;
    }

    return answer
}


console.log(solution([11, 2, 3, 4, 5]));
console.log(solution([1, 3, 5, 7]));

