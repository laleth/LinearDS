class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Insert a node at a specific position
    insertAt(data, position) {
        if (position < 0 || position > this.size) {
            return false;
        }

        const newNode = new Node(data);
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let prev = null;
            let index = 0;
            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }
            newNode.next = current;
            prev.next = newNode;
        }
        this.size++;
        return true;
    }

    // Remove a node at a specific position
    removeAt(position) {
        if (position < 0 || position >= this.size) {
            return null;
        }

        let current = this.head;
        let prev = null;
        let index = 0;

        if (position === 0) {
            this.head = current.next;
        } else {
            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }
            prev.next = current.next;
        }
        this.size--;
        return current.data;
    }

    // Find the index of a node with specific data
    indexOf(data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    // Check if the list is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the list
    getSize() {
        return this.size;
    }

    // Print the list
    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }
}

// Example usage:
const myList = new LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);
myList.printList(); 

myList.insertAt(15, 1);
myList.printList(); 

myList.removeAt(2);
myList.printList(); 

console.log(myList.indexOf(15)); 

console.log(myList.isEmpty()); 

console.log(myList.getSize()); 
