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
    let x =1;
    let node =head;
    let first = {next:head}
    while(head.next!==null){
        head = head.next;
        x++;
    }
    if(x-n!==0){
    for(i=1;i<x-n;i++) node=node.next;
    if(node.next!==null){
        if(node.next.next!==null){
            node.next=node.next.next;
        }else{
            node.next=null;
        }
    }else{
        node.next=null;
    }
    }else{
        first.next=null;
    }
    return first.next;
};