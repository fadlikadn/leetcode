/**
 * https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
 */

type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const filteredArr: number[] = []
    for (let j = 0; j < arr.length; j++) {
        if (fn(arr[j], j)) filteredArr.push(arr[j])
    }

    /**
    arr.forEach((val, i) => {
        if (fn(val, i)) filteredArr.push(val)
    }) 
    */

    return filteredArr
};