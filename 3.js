//3739. Count Subarrays With Majority Element II
let nums =[1,2,2,3]
let target = 2;
let count = 0;
let arr = [];
let result = 0;
for (let i = 0; i < nums.length; i++) {
for(let j=i; j<nums.length; j++){
   arr[j] = nums[j];
    if(arr[j] === target){
        count++;
    console.log(arr);
    }
}
arr.length=0;
}

console.log(count);