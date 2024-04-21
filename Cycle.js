class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false; 
    }

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false; 
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return true; 
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head.next.next; 
console.log(hasCycle(head)); 


let head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);
head2.next.next.next = new Node(4);
head2.next.next.next.next = new Node(5);

console.log(hasCycle(head2)); 