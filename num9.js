// 중복된 숫자 개수

const solution = (array, n) => {
    return array.filter(x => x === n).length
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));
