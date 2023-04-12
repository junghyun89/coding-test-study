// 그 시간 사무실에 몇 명이 있었나?

// const solution = (time, array) => {
//     const timeArray = time.split(':');
//     let answer = 0;

//     for (let i = 0; i < array.length; i++) {
//         const 출근 = array[i][0].split(':');
//         const 퇴근 = array[i][1].split(':');

//         if (출근[0] <= timeArray[0] <= 퇴근[0]) {
//             if (출근[1] <= timeArray[1] <= 퇴근[1]) {
//                 if (출근[2] <= timeArray[2] <= 퇴근[2]) {
//                     answer++
//                 }
//             }
//         }

//     }

//     return answer
// }

const solution = (time, array) => {
    const 시간 = time.split(':').join();
    let answer = 0;

    for (let i = 0; i < array.length; i++) {
        const 출근 = array[i][0].split(':').join();
        const 퇴근 = array[i][1].split(':').join();

        if (출근 <= 시간 && 시간 <= 퇴근) answer++

    }

    return answer
}

console.log(solution('11:23:20', [['09:12:23', '11:14:35'], ['10:34:01', '13:23:40'], ['10:34:31', '11:20:10']])); 


