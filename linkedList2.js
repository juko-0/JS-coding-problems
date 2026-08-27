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
    let carry = 0;
    let head = new ListNode();
    let temp = head;
while(l1!==null||l2!==null){
    if(l1!==null&&l2!==null){    
        sum=l1.val+l2.val+carry;
        l1=l1.next;
        l2=l2.next;
        
    } 
    else if(l1===null){
        sum=l2.val+carry;
        l2=l2.next;
    }
    else{
        sum=l1.val+carry;
        l1=l1.next;
    }
    carry = 0;
    if(sum>9){
        sum%=10;
        carry = 1;
    }
    let node = new ListNode(sum);
    temp.next=node;
    temp = node;
}
if(carry){
    let node = new ListNode(carry);
    temp.next=node;
}
return head.next;
}