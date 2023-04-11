// 중복된 문자 제거

// const solution = (my_string) => {
//     return my_string.split('').filter((x, i) => my_string.indexOf(x) === i).join('');
// }

const solution = (my_string) => {
    return [...new Set(my_string)].join('')
} // set 순서 보장, 중복 제거

console.log(solution('people'));
console.log(solution('We are the world'));



