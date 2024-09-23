class List {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        };

        this.tail = this.head;
    }
    appendNode(newNodeData) {
        let newNode = {
            value: newNodeData,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }
}



let list = new List(10);
list.appendNode(200);
list.appendNode(300);
list.appendNode(40);
console.log(list);

