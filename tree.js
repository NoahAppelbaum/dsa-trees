"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */

  //base case: []

  sumValues() {
    let stack = [this];
    let sum = 0;

    while(stack.length){
      let curr = stack.pop();
      sum += curr.val;

      if(curr.children.length){
        stack.push(...curr.children);
      }
    }

    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    let stack = [this];
    let count = 0;

    while(stack.length){
      let curr = stack.pop();
      if(curr.val % 2 === 0){
        count++;
      }

      if(curr.children.length){
        stack.push(...curr.children);
      }
    }

    return count;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){
    let stack = [this];
    let count = 0;

    while(stack.length){
      let curr = stack.pop();
      if(curr.val > lowerBound){
        count++;
      }

      if(curr.children.length){
        stack.push(...curr.children);
      }
    }

    return count;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    if(!this.root){
      return 0;
    }

    return this.root.sumValues();
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if(!this.root){
      return 0;
    }

    return this.root.countEvens();
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if(!this.root){
      return 0;
    }

    return this.root.numGreater(lowerBound);
  }
}

module.exports = { Tree, TreeNode };
