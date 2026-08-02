//4Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let len = nums.length;
    let i,j,check,sum;
    let array2 = [];
    let count=0;
    for(i=0;i<len;i++){
    j=i+1;
    console.log();
    while(j+2<len && i+1<len){
     sum = nums[i]+nums[j]+nums[j+1]+nums[j+2];
          if(sum===target){
                check = [nums[i],nums[j],nums[j+1],nums[j+2]].sort((a,b)=>a-b);
                let checkString = JSON.stringify(check);
                let exists = array2.some(item => JSON.stringify(item) === checkString);
                if(!exists){
                array2[count]=[nums[i],nums[j],nums[j+1],nums[j+2]].sort((a,b)=>a-b);
                }
                count++;
            }
     sum = nums[i]+nums[i+1]+nums[j+2]+nums[j+3];
         if(sum===target){
                check = [nums[i],nums[i+1],nums[j+2],nums[j+3]].sort((a,b)=>a-b);
                let checkString = JSON.stringify(check);
                let exists = array2.some(item => JSON.stringify(item) === checkString);
                if(!exists){
                array2[count]=[nums[i]+nums[i+1]+nums[j+2]+nums[j+3]].sort((a,b)=>a-b);
                }
                count++;
            }
     sum = nums[i]+nums[i+1]+nums[i+2]+nums[j+3];
         if(sum===target){
                check = [nums[i],nums[i+1],nums[i+2],nums[j+3]].sort((a,b)=>a-b);
                let checkString = JSON.stringify(check);
                let exists = array2.some(item => JSON.stringify(item) === checkString);
                if(!exists){
                array2[count]=[nums[i]+nums[i+1]+nums[i+2]+nums[j+3]].sort((a,b)=>a-b);
                }
                count++;
            }    
        j++;    

    }
    return array2;
    }
};
let nums =[1,0,-1,0,-2,2];
target = 0;
console.log(fourSum(nums, target));
