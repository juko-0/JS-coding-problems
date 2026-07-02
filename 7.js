5//. Longest Palindromic Substring


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
var arr = s.split("");
let arr2 = [], count, item, total=0, output=arr[0];
for(let i=0; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
        arr2.push(arr[j]);
        console.log(arr2);
        count=Math.floor(arr2.length/2);
        console.log(count);
        for(let k=0; k<count; k++){
            item = arr2.length-1-k;
            if(arr2[k]===arr2[item]){
            total++;
            if(total==count){
                console.log(`palindrome ${arr2.join("")}`)
                if(arr2.length > output.length){
                output = arr2.join("");
                }
            }
            }else{
                break;  
                total =0;
            }
        }
        total = 0;
    }
    arr2= [];
}
console.log(output);
return output;
}
var result = longestPalindrome("ballaballla");