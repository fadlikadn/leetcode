/**
 * https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript
 */

type F = (x: number) => number;

function compose(functions: F[]): F {
    if (functions.length === 0) {
        return (x) => x
    }
    return function(x) {
        let qty = x
        for (let i = functions.length-1; i >= 0; i--) {
            qty = functions[i](qty)
        }
        return qty
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */