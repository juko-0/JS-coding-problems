//7. Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
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
    (!pos)?result=-result:result;
    if(-2147483648 <= result && result <= 2147483647){
        return result;
    }else{
        return 0;
    }
};
console.log(reverse(749579993568349548968758477586874));