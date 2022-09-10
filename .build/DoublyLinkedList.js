var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => DoublyLinkedList
});
class DoublyLinkedList {
  constructor() {
    this.head = void 0;
    this.tail = void 0;
    this.length = 0;
  }
  prepend(item) {
    const node = { val: item };
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  insertAt(item, idx) {
    if (idx > this.length) {
      throw Error("uh oh...");
    } else if (idx === this.length) {
      this.append(item);
      return;
    } else if (idx === 0) {
      this.prepend(item);
      return;
    }
    this.length++;
    const curr = this.getAt(idx);
    const node = { val: item };
    node.next = curr;
    node.prev = curr.prev;
    curr.prev = node;
    if (node.prev) {
      node.prev.next = curr;
    }
  }
  append(item) {
    const node = { val: item };
    this.length++;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  remove(item) {
    let curr = this.head;
    for (let i = 0; curr && i < this.length; ++i) {
      if (curr.val === item) {
        break;
      }
      curr = curr.next;
    }
    if (!curr) {
      return void 0;
    }
    return this.removeNode(curr);
  }
  get(idx) {
    var _a;
    return (_a = this.getAt(idx)) == null ? void 0 : _a.val;
  }
  removeAt(idx) {
    const node = this.getAt(idx);
    if (!node) {
      return void 0;
    }
    return this.removeNode(node);
  }
  removeNode(node) {
    var _a;
    this.length--;
    if (this.length === 0) {
      const out = (_a = this.head) == null ? void 0 : _a.val;
      this.head = this.tail = void 0;
      return out;
    }
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    if (node === this.head) {
      this.head = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }
    node.prev = node.next = void 0;
    return node.val;
  }
  getAt(idx) {
    let curr = this.head;
    for (let i = 0; curr && i < idx; ++i) {
      curr = curr.next;
    }
    return curr;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=DoublyLinkedList.js.map
