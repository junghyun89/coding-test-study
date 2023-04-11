// 369게임

// const solution = (order) => {
//     return order.toString().split('').filter(x => '369'.includes(x)).length;
// }

// const solution = (order) => {
//     const result = order.toString().match(/[369]/g) ?? [];
//     return result.length;
// } // null일 경우 런타임 에러  / 예) 1일 경우

const solution = (order) => {
    const s = new Set('369');
    return order.toString().split('').filter(x => s.has(x)).length;
}


console.log(solution(3));
console.log(solution(29423));
console.log(solution(24));


