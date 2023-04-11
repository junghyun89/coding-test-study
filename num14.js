// 특정 문자 제거하기

// const solution = (my_string, letter) => {
//     return [...my_string].filter(x => x !== letter).join('')
// }

const solution = (my_string, letter) => {
    return my_string.replaceAll(letter, '');
}

console.log(solution('abcdef', 'f'));
console.log(solution('BCBdbe', 'B'));
