var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => in_order_search
});
function walk(curr, path) {
  if (!curr) {
    return path;
  }
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);
  return path;
}
function in_order_search(head) {
  return walk(head, []);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=BTInOrder.js.map
