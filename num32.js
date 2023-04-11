// 컨트롤 제트

const solution = (s) => {
    const array = s.split(' ');
    return array.map((x, i) => {
        if (x === 'Z' || array[i+1] === 'Z') return 0
        return +x
    }).reduce((acc, cur) => acc + cur, 0)
}

console.log(solution('1 2 Z 3'));
console.log(solution('10 20 30 40'));


