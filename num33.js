// 등수 매기기

const solution = (score) => {
    const average = score.map(([a, b]) => (a + b) / 2);
    const sorted = [...average].sort((a, b) => b - a);
    return average.map(x => sorted.indexOf(x) + 1)
}

console.log(solution([[80,70], [90,50], [40,70], [70, 40]]));


