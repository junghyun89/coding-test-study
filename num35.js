// 다항식 더하기

const solution = (n) => {
    const array = n.split(' + ')
    let x = array.filter(x => x.includes('x')).map(x => +x.replace('x', '') || 1).reduce((acc, cur) => acc + cur, 0)
    let num = array.filter(x => !x.includes('x')).reduce((acc, cur) => acc + +cur, 0);
    const answer = [];

    if (x) (x === 1) ? answer.push('x') : answer.push(`${x}x`);
    if (num) answer.push(num);
    return answer.join(' + ')
}

console.log(solution('3x + 7 + x')); 
console.log(solution('x + x + x')); 


