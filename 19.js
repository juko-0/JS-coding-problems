/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
 head = {next : head};
 let temp = head;
 let node =head;
 let x =0;
 while(temp.next!==null){
    temp=temp.next;
    x++;
 }
 let i = x-n;
 for(let y=0; y<i; y++){
 node=node.next;
 }
 console.log(i+2<x);
 (i+2<x)?node.next=node.next.next:node.next=null;
 return head.next;
};