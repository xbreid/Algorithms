export default function two_crystal_balls(breaks: boolean[]): number {
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