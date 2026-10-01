/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n){
    let count=0,temp=1;
    let num = [1];
    let newNum = '';
    if(n==1) return "1";
    else if(n>30) return 0;
    while(n>1){
    while(count<num.length){
    if(num[count+1]!==null && num[count]==num[count+1]){
        temp++;
        count++;
    }else{
        newNum = newNum+temp+num[count];
        temp=1;
        count++;
    }
}       count=0;
        num=[];
        num = Array.from(newNum, Number);
        newNum='';
        n--;
}

return num.join("");
};
console.log(countAndSay(3));