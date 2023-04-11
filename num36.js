// 안전지대
// 1은 true고 0은 false임을 활용할 수 있다!

const solution = (board) => {
    const n = board.length;
    let answer = 0;

    const isSafe = (x, y) => {
        const rangeX = [x-1, x, x+1];
        const rangeY = [y-1, y, y+1];

        for (const ry of rangeY) {
            for (const rx of rangeX) {
                if (board[ry]?.[rx]) return false
            }
        }
        return true
    }


    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            answer += isSafe(x, y);
        }
    }

    return answer
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]])); 
console.log(solution([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]])); 


