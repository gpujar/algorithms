// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        // this.head = new Node(data, this.head);
        this.insertAt(data, 0);
    }

    size(){
        let counter = 0;
        let node = this.head;
        while(node){
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        let node = this.head;
        while(node && node.next){
            node = node.next;
        }
        return node;
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(this.head && this.head.next){
            this.head = this.head.next;
        }else{
            this.head = null;
        }
    }

    insertLast(data){
        const lastNode = this.getLast();
        if(lastNode){
            lastNode.next = new Node(data);
        }else{
            this.head = new Node(data);
        }
    }

    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let previousNode = this.head;
        let node = this.head.next;
        while(node.next){
            previousNode = node;
            node = node.next;
        }
        previousNode.next = null;
    }

    getAt(index){
        let node = this.head;
        let counter = 0;
        while(node){
            if(index === counter){
                return node;
            }
            node = node.next;
            counter++;
        }
        return node;
    }

    removeAt(index){
        if(!this.head){
            return;
        }
        if(!this.head.next && index === 0){
            this.head = null;
            return;
        }
        let previousNode = null;
        let node = this.head;
        let counter = 0;
        while(node){
            if(counter === index){
                if(previousNode && node.next){
                    previousNode.next = node.next;
                }else if(previousNode && !node.next){
                    previousNode.next = null;
                }else if(!previousNode && node.next){
                    this.head = node.next;
                }
                return;
            }
            previousNode = node;
            node = node.next;
            counter++;
        }
    }

    insertAt(data, index){
        let node = this.getAt(index);
        let previousNode = this.getAt(index - 1);
        if(!node){
            this.insertLast(data);
        }else if(!previousNode){
            this.head = new Node(data, this.head);
        }else{
            previousNode.next = new Node(data, node);
        }
    }

    forEach(fn){
        let node = this.head;
        let counter = 0;
        while(node){
            fn(node, counter);
            node = node.next;
            counter++
        }
    }

    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
        }


}

module.exports = { Node, LinkedList };
