class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next; 
        current.next = prev; 

   
        prev = current;
        current = next;
    }

    head = prev;

    return head;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original Linked List:");
printLinkedList(head); 

head = reverseLinkedList(head);

console.log("Reversed Linked List:");
printLinkedList(head);

function printLinkedList(head) {
    let current = head;
    let result = '';
    while (current) {
        result += current.data + ' -> ';
        current = current.next;
    }
    result += 'null';
    console.log(result);
}
