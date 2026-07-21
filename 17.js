//letter combination of a phone number
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
let arr = [["a","b","c"],["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"],["p","q","r","s"],["t","u","v"],["w","x","y","z"]];
let len = digits.toString().length;
let result = [];
let i=0,j=0;
if(len>=1 && len<=4){
while(len>0){
let  num = +(digits+'').charAt(j);
arr[num-2].forEach(item=>{
result[i]=item;
i++
})
j++;
i=0;
len--;
}
console.log(result)
}
};

letterCombinations(477)