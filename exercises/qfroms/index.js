// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    constructor(){
        this.stack = new Stack();
        this.readStack = new Stack();
    }
    add(record){
        this.stack.push(record);
    }
    remove(){
        let returnRecord;
        while(this.stack.peek()){
            this.readStack.push(this.stack.pop());
        }
        returnRecord = this.readStack.pop();
        while(this.readStack.peek()){
            this.stack.push(this.readStack.pop());
        }
        return returnRecord;
    }
    peek(){
        let returnRecord;
        while(this.stack.peek()){
            this.readStack.push(this.stack.pop());
        }
        returnRecord = this.readStack.peek();
        while(this.readStack.peek()){
            this.stack.push(this.readStack.pop());
        }
        return returnRecord;
    }
}

module.exports = Queue;
