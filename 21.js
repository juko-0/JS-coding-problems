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
    let node = new ListNode();
    let head = {next : node};
    while(list1!==null || list2!==null){
    if(list1===null) node=list2;
    else if (list2===null) node = list1;
    else{
    if(list1.val===list2.val){
    node.val = list1.val;
    list1= list1.next;
    node = node.next;
    node.val = list2.val;
    list2 = list2.next;
    node = node;
    }if(list1.val>list2.val){
        node.val=list2.val;
        list2 = list2.next;
        node = node.next;
    }else{
        node.val=list1.val;
        list1=list1.next;
        node=node.next;
    }
}
    }
    return head.next;
};