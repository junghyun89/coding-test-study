// Ugly Numbers 2, 3, 5

const solution = (index) => {
    let n = 1; 
    let ugly = [1];

    while (n < index) {
        const u = ugly.pop();
        ugly = [...new Set([...ugly, 2 * u, 3 * u, 5 * u])].sort((a, b) => b - a);
        n++;
    }

    return `The ${index}'th ugly number is ${ugly[ugly.length-1]}`;
}

console.log(solution(1500));

