//11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length-1;
    let max =0,water;
   while(left<right){
   (height[left]>height[right])?water=height[right]*(right-left):water=height[left]*(right-left);
   if(water>max) max = water;
   (height[left]>height[right])?right--:left++;
   }
   return max;
};