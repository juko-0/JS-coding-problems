/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let low,high;
if(list1===null) return list2;
else if(list2===null) return list1;
else{
if(list1.val<=list2.val){
    low = list1;
    high = list2; 
}else{
    low = list2;
    high = list1;
}
 let head = {next : low};
while(low.next!==null && high!==null){
    if(low.next.val>=high.val){
        temp = low.next;
        low.next = high;
        low = low.next;
        high = temp;
    }else low = low.next;
}
if(low.next===null)low.next=high;
else return head.next;
return head.next;
}
};