// 배열 바꾸기

// const solution = (array) => {
//     return array.map(x => x.split('')).sort((a, b) => a[1] - b[1]).map(x => x.join(''))
// }

const solution = (array) => {
    const zip = (a, b) => a.map((v, i) => [v, b[i]]);
    const l1 = array.slice(0, array.length/2);
    const l2 = array.slice(array.length/2);
    return zip(l1, l2).flat()
}

console.log(solution(['a1', 'a2', 'a3', 'b1', 'b2', 'b3'])); 


