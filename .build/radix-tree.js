class RadixNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
  addNode(value) {
    this.children.push(new RadixNode(value));
  }
}
class RadixTree {
  constructor(children = []) {
    this.root = new RadixNode("", children);
  }
  getPrefix(target, node) {
    const length = Math.min(target.length, node.length);
    let buffer = "";
    for (let i = 0; i < length; i++) {
      if (target[i] !== node[i])
        return buffer;
      buffer += target[i];
    }
    return buffer;
  }
  addWord(value, currentNode = this.root) {
    let current = currentNode.value;
    let prefix = this.getPrefix(value, current);
    let target = value.slice(prefix.length);
    let remaining = "";
    if (prefix.length < current.length) {
      remaining = current.slice(prefix.length - current.length);
    }
    if (!target.length)
      return;
    if (remaining.length) {
      const promotedChild = new RadixNode(remaining, currentNode.children);
      const newChild = new RadixNode(target);
      currentNode.value = prefix;
      currentNode.children = [promotedChild, newChild];
    }
    for (const child of currentNode.children) {
      let childPrefix = this.getPrefix(target, child.value);
      if (childPrefix.length) {
        this.addWord(target, child);
        return;
      }
    }
    currentNode.addNode(target);
  }
  traversal(node, array2 = []) {
    if (!node)
      return;
    for (const child of node.children) {
      this.traversal(child, array2);
    }
    array2.push(node.value);
    return array2;
  }
  depthFirstSearch(node, array2) {
    array2.push(node.value);
    for (const kid of node.children) {
      this.depthFirstSearch(kid, array2);
    }
    return array2;
  }
  breadthFirstSearch(array2, hash2 = {}) {
    const queue = [this.root];
    while (queue.length > 0) {
      let current = queue.shift();
      if (!current)
        return;
      for (let child of current.children) {
        queue.push(child);
      }
    }
    return array2;
  }
}
const tree = new RadixTree();
tree.addWord("ape");
tree.addWord("apple");
tree.addWord("romane");
tree.addWord("romanus");
tree.addWord("romulus");
tree.addWord("roman");
tree.addWord("rubens");
tree.addWord("rubicon");
tree.addWord("rubicundus");
console.log(tree.root);
let hash = {};
const array = [];
console.log(tree.traversal(tree.root, array));
//# sourceMappingURL=radix-tree.js.map
