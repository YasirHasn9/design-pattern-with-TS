"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        // the head should be the Node class which has 2 properties; head and next
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        // new node is the node we want to add to the tail
        var node = new Node(data);
        // edge case : what if the LinkedList is empty 
        if (!this.head) {
            this.head = node;
            // the void is still valid because the function didnt return something important
            return;
        }
        // since we want to add something to end the of the list , we need the tail.
        // each iteration, we make the tail on a next node until the end where the Node.next is null
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        // when the last node is null, then add the new node to the tail
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var count = 1;
            var currentNode = this.head;
            while (currentNode.next) {
                count++;
                currentNode = currentNode.next;
            }
            return count;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        // it take a number and return the index of the node in the LinkedList
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        var node = this.head;
        var counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds");
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    // swapping in likedList is kinda complicated, because if we have 1 --> 3 --> 2 --> null and wanna swap 3 and 2
    // we have to know the pervious and next node. Instead, we are gonna cheat a little bit here 
    // we are gonna swap the values.
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        while (this.head) {
            console.log(this.head.data);
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
