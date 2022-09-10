var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => bfs
});
function bfs(head, needle) {
  const q = [head];
  while (q.length) {
    const curr = q.shift();
    if (!curr)
      continue;
    if (curr.value === needle) {
      return true;
    }
    q.push(curr.left);
    q.push(curr.right);
  }
  return false;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=BTBFS.js.map
