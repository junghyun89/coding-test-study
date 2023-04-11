// 문자열 밀기

// const solution = (A, B) => {
//     const array = [...A];

//     for (let i = 0; i < A.length; i++) {
//         array.unshift(array.pop());
//         if (array.join('') === B) return i+1
//     }

//     return -1
// }

const solution = (A, B) => {
    return B.repeat(2).indexOf(A)
}

console.log(solution('hello', 'ohell'));
console.log(solution('apple', 'elppa'));

