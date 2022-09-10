var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => solve
});
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
];
function walk(maze, wall, curr, end, seen, path) {
  if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze[0].length) {
    return false;
  }
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }
  if (seen[curr.y][curr.x]) {
    return false;
  }
  seen[curr.y][curr.x] = true;
  path.push(curr);
  for (let i = 0; i < dir.length; ++i) {
    const [x, y] = dir[i];
    const next = {
      x: curr.x + x,
      y: curr.y + y
    };
    if (walk(maze, wall, next, end, seen, path)) {
      return true;
    }
  }
  path.pop();
  return false;
}
function solve(maze, wall, start, end) {
  const seen = [];
  const path = [];
  for (let i = 0; i < maze.length; ++i) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  walk(maze, wall, start, end, seen, path);
  return path;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=MazeSolver.js.map
