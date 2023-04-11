// 잘라서 배열로 저장하기

// const solution = (my_str, n) => {
//     const answer = [];

//     for (let i = 0; ; i += n) {
//         if (!my_str[i]) break
//         answer.push(my_str.slice(i, i+n))
//     }

//     return answer
// }

const solution = (my_str, n) => {
    return my_str.match(new RegExp(`.{1, ${n}}`, 'g'))
}


console.log(solution('abc1Addfggg4556b', 6));
