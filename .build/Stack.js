var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => Stack
});
class Stack {
  constructor() {
    this.head = void 0;
    this.length = 0;
  }
  push(item) {
    const node = { value: item };
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }
    node.prev = this.head;
    this.head = node;
  }
  pop() {
    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const head2 = this.head;
      this.head = void 0;
      return head2 == null ? void 0 : head2.value;
    }
    const head = this.head;
    this.head = head.prev;
    head.prev = void 0;
    return head.value;
  }
  peek() {
    var _a;
    return (_a = this.head) == null ? void 0 : _a.value;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Stack.js.map
