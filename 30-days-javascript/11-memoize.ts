/**
 * https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript
 */

type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    let cache: Record<string, number> = {}

    return function(...args) {
        const key = JSON.stringify(args)
        if (cache.hasOwnProperty(key)) {
            return cache[key]
        } else {
            const res = fn(...args)
            cache[key] = res
            return res
        }
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */