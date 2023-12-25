/**
 * Link: https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
 */

function createCounter(n: number): () => number {
  let start = n

  return function() {
      return start++
  }
}


/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/