// 각도기

const solution = (angle) => {
    return angle === 180 ? '평각' : angle > 90 ? '둔각' : angle === 90 ? '직각' : '예각'
}

console.log(solution(180));
console.log(solution(50));
console.log(solution(90));
console.log(solution(120));