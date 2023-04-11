// 영어가 싫어요

const solution = (numbers) => {
    const english = ['zero','one','two','three','four','five','six','seven','eight','nine'];

    for (let i = 0; i < english.length; i++) {
        if (numbers.includes(english[i])) numbers = numbers.split(english[i]).join(i);
    }

    return numbers
}

console.log(solution('onetwothreefourfivesixseveneightnine'));
console.log(solution('onefourzerosixsevenone'));

