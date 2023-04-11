// 가위 바위 보

const solution = (rsp) => {
    const winner = {'0': '5', '5': '2', '2': '0'};
    return [...rsp].map(x => winner[x]).join('');
}

console.log(solution('2'));
console.log(solution('205'));

