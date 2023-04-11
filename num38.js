// 10,000까지 8은 총 몇 번?

const solution = () => {
    const array = new Array(10000).fill(1).map((x, i) => x + i);
    return array.join('').split('8').length - 1
}

console.log(solution()); 


