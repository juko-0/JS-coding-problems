var addTwoNumbers = function(l1, l2) {
    let a = "";
    let b = "";
 let dummy = {next : l1} 
 let temp = dummy;
 while(temp!==null){
 a = temp.val+a;
temp= temp.next;
 }
  while(l2!==null){
 b = l2.val+b;
 l2= l2.next;
 }
 a=+a;
 b=+b;
 console.log(a);
 console.log(b);
let arr = [...String(a+b)].map(Number);
let dis = arr.length-1;

}

addTwoNumbers(l1,l2)