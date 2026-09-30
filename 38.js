/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function() {
    let count=0,temp=1;
    let num = [1,1,1,2,2,1];
    let newNum = '';
    while(count<num.length){
        console.log((num[count+1]!==null && num[count]==num[count+1]))
    if(num[count+1]!==null && num[count]==num[count+1]){
        temp++;
        count++;
    }else{
        newNum = newNum+temp+num[count];
        temp=1;
        count++;
    }
}
        num = Array.from(newNum, Number);
console.log(num);
};
countAndSay();