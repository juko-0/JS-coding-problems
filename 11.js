//11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let indexed = height.map((value, index) => [value, index+1]);
   indexed.sort((a, b) => b[0]-a[0]); 
   console.log(indexed);
};

let height = [1,8,6,2,5,4,8,3,7];
maxArea(height);