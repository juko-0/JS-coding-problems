//3739. Count Subarrays With Majority Element II
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    let count = 0;
    let arr = [];
    let length = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        arr = [];
        count = 0;
        for (let j = i; j < nums.length; j++) {
            arr.push(nums[j]);
            if (nums[j] === target) {
                    count++;
                }
            length = arr.length;
            if (count > Math.floor(length / 2)) {
                result++;
            }
        }
    }
    return result;
};

console.log(countMajoritySubarrays([1, 2, 3, 2, 2], 2)); 