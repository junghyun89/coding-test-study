// 외계어 사전

// const solution = (spell, dic) => {
//     const sortedSpell = [...spell].sort().join();

//     for (let i = 0; i < dic.length; i++) {
//         if (sortedSpell == [...dic[i]].sort().join()) return 1
//     }

//     return 2
// }

const solution = (spell, dic) => {
    return dic.some(x => [...x].sort().toString() === [...spell].sort().toString()) ? 1 : 2
}

console.log(solution(['p','o','s'], ['sod', 'eocd','qixm','adio','soo']));
console.log(solution(['z','d','x'], ['def', 'dww','dzx','loveaw']));


