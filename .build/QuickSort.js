var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => quick_sort
});
function qs(arr, lo, hi) {
  if (lo >= hi) {
    return;
  }
  const pivotIdx = partition(arr, lo, hi);
  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}
function partition(arr, lo, hi) {
  const pivot = arr[hi];
  let idx = lo - 1;
  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;
  return idx;
}
function quick_sort(arr) {
  qs(arr, 0, arr.length - 1);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=QuickSort.js.map
