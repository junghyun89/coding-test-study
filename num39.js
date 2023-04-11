// 거리가 가장 짧은 쌍 출력

// const solution = (array) => {
//     let index = 0;
//     let min = Infinity;

//     for (let i = 1; i < array.length; i++) {
//         if (array[i] - array[i-1] < min) {
//             index = i;
//             min = array[i] - array[i-1];

//         }
//     }

//     return [array[index-1], array[index]]
// }


const solution = (array) => {
    const sliced = array.slice(1);
    return array.map((x, i) => [x, sliced[i]]).sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))[0]
}

console.log(solution([1, 3, 4, 8, 13, 17, 20])); 


