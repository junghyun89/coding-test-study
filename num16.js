// 배열의 유사도

// const solution = (s1, s2) => {
//     return s1.filter(x => s2.includes(x)).length;
// }

//교집합으로 구하기
const solution = (s1, s2) => {
    return s1.length + s2.length - new Set([...s1, ...s2]).size;
}


console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']));
