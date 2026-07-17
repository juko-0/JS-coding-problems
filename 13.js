//12. Convert Number to Roman
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
let len = Math.abs(num).toString().length;
let result;
let div = 10**(len-1);
let rom = [["I",1],["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M",1000]];
let temp = 0;
if(len==4){ 
    result = rom[6][0].repeat((num-num%div)/div);
    console.log(result)
    num = num%div;
    console.log(num);
    div = div/10;
    console.log(div);
}
let i=0;
while(num>0){
    temp = num-(num%div);
    while(temp>=rom[i][1]){
    i++;
    }
    i--;
    console.log(temp, div, i);
    if(temp==div*9 || temp == div*4){
    (temp==div*9)?result=result+rom[i-1][0]+rom[i+1][0]:result=result+rom[i-1][0]+rom[i][0];
    num = num%div;
    div=div/10;
    console.log(result);
    i=0;
    }else if(temp>=div*5 && temp!=div*9){
        result = result+rom[i][0]+rom[i-1][0].repeat((temp-rom[i][0])/div);
        num = num%div;
        div=div/10;
        i=0;
    }else if(temp<div*4){
        result = result + rom[i][1].repeat(temp/div);
        num = num%div;
        div=div/10;
        i=0;
    }
    
 }
 console.log(result);
}
intToRoman(3994);