// special sort

// const solution = (array) => {
//     const negativeNum = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0) negativeNum.push(array.splice(i, 1));
//     }

//     return negativeNum.flat().concat(array)
// }

const solution = (array) => {
    return [...array.filter(x => x < 0), ...array.filter(x => x >= 0)]
}

console.log(solution([-1, 1, 3, -2, 2])); // -1 -2 1 3 2


