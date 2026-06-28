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
let i = 0;
while (i < arr.length) {
  let item = arr[i];
  if(!arr2.includes(item)) {
    arr2.push(item);
    count = arr2.length;
    console.log(arr2);
    i++;
  }else{
    j = arr2.indexOf(item);
    i = j + 1;
    console.log(i);
    arr2 = [];
    count = 1;
  }
  if(count > result) {
    result = count;
  }
}
return result;
}

console.log(lengthOfLongestSubstring("dvdf"));