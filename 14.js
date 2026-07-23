//letter combination of a phone number
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
let arr = [["a","b","c"],["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"],["p","q","r","s"],["t","u","v"],["w","x","y","z"]];
let temp = [];
let c = 0;
let len = digits.toString().length;
let  num = +(digits+'').charAt(0);
let result = arr[num-2];
len--;
let k = 1;
while(len>0){
    num = +(digits+'').charAt(k);
    for(let i=0;i<result.length;i++){
        for(let j=0;j<arr[num-2].length;j++){
            temp[c] = result[i]+arr[num-2][j];
            c++;
        }       
    }
    result=temp;
    temp=[]
    k++;
    len--;
    c=0;
}
};

letterCombinations(234);