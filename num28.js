// 진료순서 정하기

const solution = (emergency) => {
    const sorted = [...emergency].sort((a, b) => b - a);
    return emergency.map(x => sorted.indexOf(x) + 1);
}

console.log(solution([3, 76, 24]));
