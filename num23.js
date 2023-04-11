// 팩토리얼

const solution = (n) => {
    let result = 1;
    let answer = 1;

    while (result <= n) {
        result *= answer;
        answer++;
    }

    return answer - 1
} 

console.log(solution(3628800));
console.log(solution(7));