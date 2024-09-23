var encode = function (strs) {
    return strs.map(str => `${str.length}/${str}`).join('');
}

const original = ["hello", "world", "leetcode"];
// encode(original)

var deocode = function (s) {
    const result = [];
    let i = 0;
    while (i < s.length) {
        const slashIndex = s.indexOf('/', i);
        const length = parseInt(s.slice(i, slashIndex))
        result.push(s.slice(slashIndex + 1, slashIndex+1+length))
        i = slashIndex+length+1;
    }
    return result;
}
let encodeString = encode(original)
let decode  = deocode(encodeString);
console.log(encodeString)
console.log(decode)