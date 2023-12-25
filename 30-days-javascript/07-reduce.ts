/**
 * https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript
 */

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let qty = init
    for (let i = 0; i < nums.length; i++) {
        qty = fn(qty, nums[i])
    }
    return qty
};