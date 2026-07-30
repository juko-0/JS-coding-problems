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
    let check;
    let count = 0;
    if(len<4){
        return []
    }else{
    for(let i=0;i<len;i++){
        let j = i+1%len;
        if(i<(i+3)%len){
            while(j>0 && (j+2)%len!==i){
            sum = nums[i]+nums[j%len]+nums[(j+1)%len]+nums[(j+2)%len];
            
            if(sum===target){
                check = [nums[i],nums[j%len],nums[(j+1)%len],nums[(j+2)%len]].sort((a,b)=>a-b);
                let checkString = JSON.stringify(check);
                let exists = array2.some(item => JSON.stringify(item) === checkString);
                if(!exists){
                array2[count]=[nums[i],nums[j%len],nums[(j+1)%len],nums[(j+2)%len]].sort((a,b)=>a-b);
                }
                count++;
            }
            j=(j+1)%len;
            }
        }else{
            while((j+2)%len!==(i-1)){
                           sum = nums[i]+nums[j%len]+nums[(j+1)%len]+nums[(j+2)%len];
            if(sum===target){
                check = [nums[i],nums[j%len],nums[(j+1)%len],nums[(j+2)%len]].sort((a,b)=>a-b);
                let checkString = JSON.stringify(check);
                let exists = array2.some(item => JSON.stringify(item) === checkString);
                if(!exists){
                array2[count]=[nums[i],nums[j%len],nums[(j+1)%len],nums[(j+2)%len]].sort((a,b)=>a-b);
                }
                count++;
            }
            j=(j+1)%len; 
            }
        }
    }
    return array2;
}};
let nums =[-3,-1,0,2,4,5];
target = 0;
console.log(fourSum(nums, target));
