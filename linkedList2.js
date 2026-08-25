/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let a = "";
    let b = "";
 while(l1!==null){
 a = l1.val+a;
l1= l1.next;
 }
  while(l2!==null){
 b = l2.val+b;
 l2= l2.next;
 }
 a=+a;
 b=+b;
let arr = [...String(a+b)].map(Number);
let i = 1;
let temp =new ListNode(arr[0]);
while(i<arr.length){
    let node =new ListNode(arr[i]);
    node.next = temp;
    temp=node;
    i++;
}
return temp;
}
