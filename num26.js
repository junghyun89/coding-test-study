// 한 번만 등장한 문자

// const solution = (s) => {
//     const map = new Map();
//     const answer = [];

//     for (let i = 0; i < s.length; i++) {
//         map.set(s[i], map.get(s[i]) + 1 || 1);
//     }

//     map.forEach((v, k) => {
//         if (v === 1) answer.push(k);
//     })
    
//     return answer.sort().join('') ?? [];
// }

// const solution = (s) => {
//     return [...s].filter(x => s.split(x).length === 2).sort().join('') ?? [];
// }

const solution = (s) => {
    return [...s].filter(x => s.match(new RegExp(x, 'g')).length === 1).sort().join('') ?? [];
}


console.log(solution('abcabcadc'));
console.log(solution('abdc'));

