// 겹치는 선분의 길이

const solution = (lines) => {
    const map = new Map();
    let answer = 0;

    for (let i = 0; i < lines.length; i++) {
        const [a, b] = lines[i];
        for (let j = a; j < b; j++) {
            map.set(j, map.get(j) + 1 || 1);
        }
    }

    map.forEach((v) => {
        if (v > 1) answer++;
    })

    return answer
}

console.log(solution([[0, 5], [3, 9], [1, 10]])); 
console.log(solution([[-1, 1], [1, 3], [3,9]])); 


