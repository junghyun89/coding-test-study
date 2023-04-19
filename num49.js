// Happy Number

const solution = (n) => {
    const array = [];
    let num = n;

    while (true) {
        if (array.includes(num)) break
        if (num === 1) break

        const splited = num.toString().split('');
        let result = 0;

        for (let i = 0; i < splited.length; i++) {
            result += splited[i] ** 2;
        }

        array.push(num);
        num = result;
    }

    return array.includes(num) ? 'Unhappy Number' : 'Happy Number'
}

console.log(solution(7));
console.log(solution(4));
console.log(solution(130000));

