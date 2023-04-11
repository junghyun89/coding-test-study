// 가까운 수

const solution = (array, n) => {
    array.sort((a, b) => a - b);
    let result = Infinity;
    let answer = 0;

    for (let i = 0; i < array.length; i++) {
        const abs = Math.abs(n - array[i]);
        if (abs < result) { // 같은 값은 안 들어오게 했고 오름정렬이기 때문에 적은 값만 출력됨
            result = abs;
            answer = array[i];
        }
    }

    return answer
}

console.log(solution([3, 12, 28], 20));
console.log(solution([10, 11, 12], 12));

