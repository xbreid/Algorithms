// Basic RadixTrie

class RadixNode {
  value: string;
  children: Array<RadixNode>;
  
  constructor(value: string, children: Array<RadixNode> = []) {
    this.value = value;
    this.children = children;
  }

  addNode(value: string) {
    this.children.push(new RadixNode(value));
  }
}

class RadixTree {
  root: RadixNode;

  constructor(children: Array<RadixNode> = []) {
    this.root = new RadixNode('', children);
  }

  getPrefix(target: string, node:string): string {
    const length = Math.min(target.length, node.length);
    let buffer = '';
  
    for (let i = 0; i < length; i++) {
      if (target[i] !== node[i]) 
        return buffer;
      
      buffer += target[i];
    }
  
    return buffer;
  }

  addWord(value: string, currentNode: RadixNode = this.root) {
    let current = currentNode.value;
    let prefix = this.getPrefix(value, current);
    let target = value.slice(prefix.length);
    let remaining = '';

    if (prefix.length < current.length) {
      remaining = current.slice(prefix.length - current.length);
    }

    if (!target.length) return;

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

  
  traversal(node: RadixNode, array: Array<string> = []) {
    if (!node) return;
  
    for (const child of node.children) {
      this.traversal(child, array);
    }
  
    array.push(node.value);
  
    return array;
  }

  depthFirstSearch(node: RadixNode, array: Array<string>) {
    array.push(node.value);
    
		for (const kid of node.children) {
			this.depthFirstSearch(kid, array);
		}
    
		return array;
  }
  
  breadthFirstSearch(array: Array<string>, hash: any = {}) {
    const queue: Array<RadixNode> = [ this.root ];
    
    while (queue.length > 0) {
      let current = queue.shift();

      if (!current) return;
      
      for (let child of current.children) {
        queue.push(child);
      }
    }
    
    return array;
  }
}

const tree = new RadixTree();
tree.addWord('ape');
tree.addWord('apple');
tree.addWord('romane');
tree.addWord('romanus');
tree.addWord('romulus');
tree.addWord('roman');
tree.addWord('rubens');
tree.addWord('rubicon');
tree.addWord('rubicundus');

console.log(tree.root);

let hash = {};

//console.log(traversal(tree.root));

const array: Array<string> = [];

console.log(tree.traversal(tree.root, array));
