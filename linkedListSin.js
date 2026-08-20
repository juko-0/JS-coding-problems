
function Node(value){
    this.val = value;
    this.next = null
}
let a = new Node(20);
let b = new Node(30);
let c = new Node(40);
let d = new Node(50);


a.next=b;
b.next=c;
c.next=d;

let head = a;
while(head!==null){
    console.log(head.val);
    head = head.next;
}
