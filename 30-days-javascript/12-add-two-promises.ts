/**
 * https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript
 */

type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    const promises = [promise1, promise2]
    return Promise.all(promises)
        .then((res) => res.reduce((accumulator, current) => accumulator + current, 0))
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

