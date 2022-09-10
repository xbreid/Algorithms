var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => compare
});
function compare(a, b) {
  if (a === null && b === null) {
    return true;
  }
  if (a === null || b === null) {
    return false;
  }
  if (a.value !== b.value) {
    return false;
  }
  return compare(a.left, b.left) && compare(a.right, b.right);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=CompareBinaryTrees.js.map
