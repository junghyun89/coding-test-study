// A로 B 만들기

// const solution = (before, after) => {

//     for (let i = 0; i < before.length; i++) {
//         if (after.includes(before[i])) after = after.replace(before[i], '');
//     }

//     return after.length === 0 ? 1 : 0
// } 

const solution = (before, after) => {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0
} 

console.log(solution('olleh', 'hello'));
console.log(solution('allpe', 'apple'));



