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

        for (let j = i; j < nums.length; j++) {
            arr.push(nums[j]);

            count = 0;
            length = arr.length;

            for (let item of arr) {
                if (item === target) {
                    count++;
                }
            }

            if (count > Math.floor(length / 2)) {
                result++;
            }
        }
    }

    return result;
};