// 가성비 최대화

const solution = (array) => {
    array.sort((a, b) => b - a);
    let 성능 = 150;
    let 가격 = 10;
    const result = [];

    for (let i = 0; i < array.length; i++) {
        성능 += array[i];
        가격 += 3;
        const 가성비 = 성능 / 가격;
        if (가성비 < result[result.length-1]) break
        result.push(가성비);
    }

    return parseInt(Math.max(...result))
}

console.log(solution([30, 70, 15, 40, 65])); 


