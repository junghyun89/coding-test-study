// 배열의 평균값

const solution = (numbers) => {
    return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
