// 양꼬치

const solution = (n, k) => {
    if (n >= 10) {
        k -= Math.floor(n / 10);
    }
    
    return 10 * 12000 + 2000 * k;
}

console.log(solution(10, 3));
