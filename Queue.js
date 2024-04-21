class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    
    enqueue(data) {
        const newNode = new Node(data);
        if (!this.rear) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    
    dequeue() {
        if (!this.front) {
            return null;
        }

        const removedNode = this.front;
        if (this.front === this.rear) {
            this.front = null;
            this.rear = null;
        } else {
            this.front = this.front.next;
        }
        this.size--;
        return removedNode.data;
    }

    
    peek() {
        if (!this.front) {
            return null;
        }
        return this.front.data;
    }

    
    isEmpty() {
        return this.size === 0;
    }

    
    getSize() {
        return this.size;
    }

    printQueue() {
        let current = this.front;
        let result = '';
        while (current) {
            result += current.data + ' <- ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }
}


const queue = new Queue();

console.log(queue.isEmpty()); 

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.printQueue(); 

console.log(queue.peek()); 

console.log(queue.dequeue()); 

queue.printQueue(); 

console.log(queue.getSize()); 

console.log(queue.isEmpty()); 