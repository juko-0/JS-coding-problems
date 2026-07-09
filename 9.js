//9. Palindrome Number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num =x;
    let len = Math.abs(x).toString().length-1;
    let pos, result =0;
    (x>0)?pos=1:pos=0;
    let div = 10 ** len; 
    (!pos)?x=-x:x;
    while(x>0){
     result += (x%10) * div;
     x=(x-(x%10))/10;
     div/=10;
    }
    if(num===result){
        return true;
    }else{
        return false;
    }
};