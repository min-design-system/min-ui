/* eslint-disable no-param-reassign */
export default function spacing(n: number, memo: Record<number, number> = {}): number {
  if (n <= 1) {
    return n;
  }
  if (!memo[n]) {
    memo[n] = spacing(n - 1, memo) + spacing(n - 2, memo);
  }
  return memo[n];
}
