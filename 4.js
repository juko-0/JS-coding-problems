//3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
let count = 0;
let arr = s.split(""); 
let result = 0;  
let j = 0;
console.log(arr); 
let arr2 = [];
let arr3 = [];
let i = 0;
while (i < arr.length) {
  let item = arr[i];
  if(!arr2.includes(item)) {
    arr2.push(item);
    count=arr2.length;
    console.log(arr2);
    i++;
  }else{
    for(let k = 0; k < i; k++) {
      arr3.push(arr[k]);
    }
    j = arr3.lastIndexOf(item);
    i = j + 1;
    console.log(i);
    count = 1;
    arr2 = [];
    arr3 = [];
  }
  if(count > result) {
    result = count;
  }
}
return result;
}

console.log(lengthOfLongestSubstring("ddvdf"));