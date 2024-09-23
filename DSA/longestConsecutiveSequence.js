// let arr = [100, 2, 3, 125, 4, 5, 520];

function longestConsecutive(arr) {
    if (arr === null || arr.length == 0) {
        return 0;
    }

    const set = new Set(arr);
    let maxSeq = 0;
    for (let num of set) {
        if (set.has(num - 1)) {
            continue;
        }
        
        let currNum = num;
        let currMax = 1;

        while (set.has(currNum + 1)) {
            currNum++;
            currMax++;
        }

        maxSeq = Math.max(maxSeq, currMax);
    }

    return maxSeq;
}
let ans = longestConsecutive([100, 2, 3, 125, 4, 5, 520]);
console.log(ans);


