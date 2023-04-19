// 120번째 죄수

const solution = () => {
    const room = new Array(120).fill(false);

    for (let i = 1; i <= 120; i++) {
        for (let j = 1; j <= room.length; j++) {
            if (j % i !== 0) continue
            room[j-1] = !room[j-1];
        }
    }

    return room.filter(x => x === true).length
}

console.log(solution()); 


