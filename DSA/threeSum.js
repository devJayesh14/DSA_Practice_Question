let arr = [-1, 0, 1, 2, -1, -4];

function threeSum(numbers) {
    numbers.sort((a, b) => a - b)
    let res = [];
    for (let i = 0; i < numbers.length; i++) {
        if(i>0 && numbers[i] == numbers[i-1])
        {
            continue;
        }
        let left = i + 1;
        let right = numbers.length - 1;
        while (left < right) {
            let sum = (numbers[right] + numbers[left] + numbers[i]);
            if (sum == 0) {
                res.push([numbers[i], numbers[left], numbers[right]]);
                left++;
            }
            else if (sum < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return res;
}
console.log(threeSum(arr));
