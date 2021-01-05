class Node {
    next: Node | null = null
    constructor(public data:number ){}
}

export class LinkedList{
    // the head should be the Node class which has 2 properties; head and next
    head: Node | null = null;

    add(data:number):void {
        // new node is the node we want to add to the tail
        let node = new Node(data)

        // edge case : what if the LinkedList is empty 
        if(!this.head){
            this.head = node
            // the void is still valid because the function didnt return something important
            return  
        }

        // since we want to add something to end the of the list , we need the tail.
        // each iteration, we make the tail on a next node until the end where the Node.next is null
        let tail = this.head
        while(tail.next){
            tail = tail.next
        }
        // when the last node is null, then add the new node to the tail
        tail.next = node
    }

    get length():number{
        if(!this.head){
            return 0
        }
        let count = 1
        let currentNode = this.head
        while(currentNode.next){
            count ++
            currentNode = currentNode.next
        }
        return count 
    }

    at(index:number):Node{
        // it take a number and return the index of the node in the LinkedList
        if(!this.head){
            throw new Error("Index out of bounds")
        }

        let node : Node | null= this.head
        let counter = 0
        while (node){
            if(counter === index){
                return node
            }
            counter++
            node = node.next
        }
        throw new Error("Index out of bounds")
    }

    compare(leftIndex:number , rightIndex:number):boolean {
        if(!this.head) {
            throw new Error("List is empty")
        }
        return this.at(leftIndex).data > this.at(rightIndex).data
    }

    // swapping in likedList is kinda complicated, because if we have 1 --> 3 --> 2 --> null and wanna swap 3 and 2
    // we have to know the pervious and next node. Instead, we are gonna cheat a little bit here 
    // we are gonna swap the values.
    swap(leftIndex:number , rightIndex:number):void {
        let leftNode = this.at(leftIndex)
        let rightNode = this.at(rightIndex)

        let leftHand = leftNode.data
        leftNode.data = rightNode.data
        rightNode.data = leftHand
    }

    print():void{
        if(!this.head){
            return 
        }
        while(this.head){
            console.log(this.head.data)
        }
    }
}