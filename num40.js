// 문자열 압축하기

const solution = (str) => {
    let num = 0;
    let answer = str[0];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === answer[answer.length-1]) {
            num++;
        } else {
            answer += num + str[i];
            num = 1;
        }
    }
    answer += num;
    
    return answer
}

console.log(solution('aaabbcccccca')); // a3b2c6a1


