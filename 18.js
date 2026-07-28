//4Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let len = nums.length;
    let array2=[];
    let sum;
    let count = 0;
    for(let i=0;i<len;i++){
        let j = i+1%len;
        if(i<(i+3)%len){
            while(j>0){
            sum = nums[i]+nums[j%len]+nums[(j+1)%len]+nums[(j+2)%len];
            if(sum===target){
                array2[count]=[nums[i],nums[j%len],nums[(j+1)%len],nums[(j+2)%len]];
                count++;
            }
            j=(j+1)%len;
            }
        }else{

        }
    }
    return array2;
};
let nums =[1,0,-1,0,-2,2,4,-4];
target = 0;
fourSum(nums, target);
