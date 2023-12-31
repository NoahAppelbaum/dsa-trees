"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    /*
      keep a counter of tiers traversed
      Go through a whole tier and see if any are incomplete
      if not, go to next tier
    */

      let count = 1;

      const stack = [this];
      let nextTier = [];

      while (stack.length){
        const curr = stack.pop();
        if (!curr.right){
          return count;
        }
        nextTier.push(curr.left, curr.right);
        if(!stack.length){
          count++;
          stack.push(...nextTier);
          nextTier = [];
        }
      }

      return count;

      //base case is no incomplete nodes, whole tree traversed

      //look at this node: is it incomplete? great, return 1
                          //if not: return 1

      /*
        For each child, I'm going to follow it's line down till I find an incomplete one
        if I don't check lines I didn't check
      */

  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */

  //keep track of count of depth
  //walk through each node and see which tier has the longest length

  maxDepth() {
    let count = 0;
    const stack = [this];
    let nextTier = [];

    while(stack.length){
      const curr = stack.pop();

      if(curr.left){
        nextTier.push(curr.left);
      }
      if(curr.right){
        nextTier.push(curr.right);
      }
      if(!stack.length){
        count++;
        stack.push(...nextTier);
        nextTier = [];
      }
    }

    return count;
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
   minDepth() {
    let count = 1;
    const stack = [this];
    let nextTier = [];

    while(stack.length){
      const curr = stack.pop();

      if(curr.left){
        nextTier.push(curr.left);
      }
      if(curr.right){
        nextTier.push(curr.right);
      }
      if(!curr.right && !curr.left){
        return count;
      }

      if(!stack.length){
        count++;
        stack.push(...nextTier);
        nextTier = [];
      }
    }

    return count;
  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if (!this.root){
      return 0;
    }

    return this.root.minDepthToIncompleteNode();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if(!this.root){
      return 0;
    }

    return this.root.maxDepth();
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    if(!this.root){
      return 0;
    }

    return this.root.minDepth();
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
