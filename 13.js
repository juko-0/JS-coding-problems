//12. Integer to Roman
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
let result= "";
let front;
let rom = [["I",1],["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M",1000]];
let temp,i; 
if(num<1 && num>3999){
    return 0;
}else{
while(num>0){
let len = Math.abs(num).toString().length;
let div = 10**(len-1);
temp = num-(num%div);
num=num%div;
i=0;
while(i<7){
    if(temp>=rom[i][1]) i++;
    else break;
}
i--;
front = temp/div;
console.log(i, temp, front);
if(front<4){
result = result + rom[i][0].repeat(front);
}else if(front>=5 && front<9){
result = result + rom[i][0]+ rom[i-1][0].repeat(front-5);
}else{
    (front==9)?result = result + rom[i-1][0] + rom[i+1][0]: result = result + rom[i][0] + rom[i+1][0];
}
}
}
return result;
};

console.log(intToRoman(4));