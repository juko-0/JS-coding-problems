/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = [];
    const current = [];
    const seen = new Set();
    let backtrack = (start)=>{
        if (current.length === 4) {
            let sum = current[0]+current[1]+current[2]+current[3];
            if(sum===target){
                const sorted = [...current].sort((a,b)=>a-b);
                const key = JSON.stringify(sorted);
        if (!seen.has(key)) {
            seen.add(key);
            result.push(sorted);
        }
            }
            return;
        }
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1);
            current.pop();
        }
    }
    backtrack(0);
    return result;
};
let nums =[2,2,2,2];
target = 8;
console.log(fourSum(nums, target));