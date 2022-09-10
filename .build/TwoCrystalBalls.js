var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => two_crystal_balls
});
function two_crystal_balls(breaks) {
  const jmpAmt = Math.floor(Math.sqrt(breaks.length));
  let i = jmpAmt;
  for (; i < breaks.length; i += jmpAmt) {
    if (breaks[i]) {
      break;
    }
  }
  i -= jmpAmt;
  for (let j = 0; j < jmpAmt && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=TwoCrystalBalls.js.map
