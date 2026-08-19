function Node(value) {
    this.value = value;
    this.next = null;
}
let a = new Node(10);
let b = new Node(20);
let c = new Node(3);
let d = new Node(40);
 
a.next = b;
b.next= c;
c.next =d;

var swapPairs = function(head) {
    let dummy = { next: head };
    let prev = dummy;

    while (prev.next !== null && prev.next.next !== null) {
        let first = prev.next;
        let second = first.next;

        // Swap
        first.next = second.next;
        second.next = first;

        // Connect previous part to swapped pair
        prev.next = second;

        // Move to the next pair
        prev = first;
    }

    return dummy.next;
};

console.log(swapPairs(a));

