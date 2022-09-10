var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => linear_search
});
function linear_search(haystack, needle) {
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=LinearSearchList.js.map
