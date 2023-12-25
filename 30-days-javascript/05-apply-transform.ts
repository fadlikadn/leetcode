/**
 * https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
 */

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const response: number[] = []
  arr.forEach((val, i) => {
      response.push(fn(val, i))
  })
  return response
};