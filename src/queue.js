const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
ListNode = function (elem) {
  this.value = elem;
  this.next = null;
}
class Queue {

  constructor() {
    this.listQueue = null;
  }

  getUnderlyingList() {
    return this.listQueue;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (!this.listQueue) {
      this.listQueue = node;
    } else {
        let current = this.listQueue;
      while (current.next) { 
        current = current.next;
      }
        current.next = node;
    }
}

  dequeue() {
    if (!this.listQueue) {
      return null;
    } else {
      let current = this.listQueue;
      this.listQueue = current.next;
      return current.value;
    }
  }
}




module.exports = {
  Queue
};
