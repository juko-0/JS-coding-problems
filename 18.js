/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);

    // Keep at most 4 copies of each value
    let temp = [];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            count = 1;
            temp.push(nums[i]);
        } else if (count < 4) {
            temp.push(nums[i]);
            count++;
        }
    }

    const result = [];
    const current = [];
    const seen = new Set();

    function backtrack(start) {
        if (current.length === 4) {
            const sum =
                current[0] +
                current[1] +
                current[2] +
                current[3];

            if (sum === target) {
                const key = JSON.stringify(current);

                if (!seen.has(key)) {
                    seen.add(key);
                    result.push([...current]);
                }
            }
            return;
        }

        for (let i = start; i < temp.length; i++) {
            current.push(temp[i]);
            backtrack(i + 1);
            current.pop();
        }
    }

    backtrack(0);

    return result;
};