let arr = [2, 7, 11, 15];
let target = 9;
function twoSum(numbers) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum == target) {
            return [left + 1, right + 1];
        }
        else if (target > sum) {
            left++;
        }
        else {
            right--;
        }
    }
}

let res = twoSum(arr);
console.log(res);
