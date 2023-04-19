// 날짜의 차이 일수
const getDate = (d) => {
    const 년 = parseInt(d.toString().slice(0, 4));
    const 월 = parseInt(d.toString().slice(4, 6));
    const 일 = parseInt(d.toString().slice(6));

    const 월별일 = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let 일수 = 년 * 365 + 일;

    for (let i = 1; i < 월; i++) {
        일수 += 월별일[i]
    }

    return 일수
}

const solution = (d1, d2) => {
    return Math.abs(getDate(d1) - getDate(d2));
}

console.log(solution(20070515, 20070501));
console.log(solution(20070501, 20070515));
console.log(solution(20070301, 20070515));
console.log(solution(20070101, 20071115));
console.log(solution(20070228, 20071215));

