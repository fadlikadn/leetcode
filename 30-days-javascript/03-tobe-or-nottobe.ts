/**
 * https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript
 */

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  function toBe(expectVal) {
      const response = val === expectVal
      if (response) return response
      else throw new Error("Not Equal")
  }
  function notToBe(expectVal) {
      const response = val !== expectVal
      if (response) return response
      else throw new Error("Equal")
  }
  return {
      toBe,
      notToBe
  }
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/