// k의 개수

// const solution = (i, j, k) => {
//     const array = [];

//     for (let num = i; num <= j; num++) {
//         array.push(...num.toString());
//     }

//     return array.filter(x => x == k).length
// } 

const solution = (i, j, k) => {
    return Array(j-i+1).fill(i).map((x, idx) => x + idx).join('').split(k).length - 1;
}


// const solution = (i, j, k) => {
//     let s = '';

//     for (let num = i; num <= j; num++) {
//         s += num;
//     }

//     return s.split(k).length - 1
// } 

console.log(solution(1, 13, 1));
console.log(solution(10, 50, 5));
console.log(solution(3, 10, 2));
