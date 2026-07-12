//11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let max = 0,dis=0,k;
       let indexed = height.map((value, index) => [value, index + 1]);
       let sorted = [...indexed].sort((a, b) => b[0] - a[0]);
       console.log(indexed)
       console.log(sorted);
   for(let i =1; i<indexed.length; i++){
      for(let j=0; j<i; j++){
         if(Math.abs(sorted[j][1]-sorted[i][1])>dis){
         dis = Math.abs(sorted[j][1]-sorted[i][1]);
         k=j;
         }
      }
   if(sorted[i][0]*dis>max){  
   max = sorted[i][0]*dis;
   }
   (sorted[i-1][1]<sorted[i][1])?indexed.splice(sorted[i-1][1], sorted[i][1]-2) :indexed.splice(sorted[i][1],sorted[i-1][1]-2);
   }
   return max;
   
};

let height = [1,8,6,2,5,4,8,25,7];
console.log(maxArea(height));