var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => Queue
});
class Queue {
  constructor() {
    this.head = this.tail = void 0;
    this.length = 0;
  }
  enqueue(item) {
    const node = { value: item };
    this.length++;
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }
  deque() {
    if (!this.head) {
      return void 0;
    }
    this.length--;
    const head = this.head;
    this.head = this.head.next;
    head.next = void 0;
    if (this.length === 0) {
      this.tail = void 0;
    }
    return head.value;
  }
  peek() {
    var _a;
    return (_a = this.head) == null ? void 0 : _a.value;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Queue.js.map
