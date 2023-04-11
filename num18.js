// 배열 회전시키기

const solution = (numbers, direction) => {
    if (direction === 'right') {
        numbers = [numbers.pop(), ...numbers];
    } else {
        numbers = [...numbers.slice(1), numbers.shift()];
    }
    return numbers
}

console.log(solution([1, 2, 3], 'right'));
console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left'));

