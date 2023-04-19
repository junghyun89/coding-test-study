// 비슷한 단어 찾아내기

const OneEditApart = (s1, s2) => {
    while (s1.length != 0 && s2.length != 0) {
        if (s1.slice(-1) === s2.slice(-1)) {
            s1 = s1.slice(0, -1);
            s2 = s2.slice(0, -1);
        } else if (s1[0] === s2[0]) {
            s1 = s1.slice(1);
            s2 = s2.slice(1);
        } else break
    }
    return s1.length <= 1 && s2.length <= 1
}

console.log(OneEditApart('cat', 'dog'));
console.log(OneEditApart('cat', 'cats')); 
console.log(OneEditApart('cat', 'cut')); 
console.log(OneEditApart('cat', 'cast')); 
console.log(OneEditApart('cat', 'at')); 
console.log(OneEditApart('cat', 'acts')); 
