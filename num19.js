// 외계행성의 나이

const solution = (age) => {
    const alphabet = 'abcdefghij'
    return age.toString().split('').map(x => alphabet[x]).join('');
}

console.log(solution(23));
console.log(solution(51));

