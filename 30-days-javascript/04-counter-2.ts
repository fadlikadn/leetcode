/**
 * https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript
 */

type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter(init: number): Counter {
  let initNumber = init
  return {
      increment: () => {
          return ++initNumber
      },
      decrement: () => {
          return --initNumber
          
      },
      reset: () => {
          initNumber = init
          return initNumber
      },
  }
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/