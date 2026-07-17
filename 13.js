//12. Convert Number to Roman
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
let len = Math.abs(num).toString().length;
let temp = 0;
let result;
let rom = [["I",1],["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M",1000]];
let div = 10**(len-1);
//loop
    let i = num - (num%div);
    if(len===4){
        temp = rom[6][1]*i/div;
        result = "M".repeat(i/div);
        console.log(result)
        console.log(temp);
        len--;
    }
    num = num%div;
    div/=10;

}
intToRoman(3994);