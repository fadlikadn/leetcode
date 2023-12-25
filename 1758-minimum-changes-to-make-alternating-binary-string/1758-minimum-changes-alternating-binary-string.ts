function minOperations(s: string): number {
    let startWith0 = 0
    let startWith1 = 0
    for (let i = 0; i < s.length; i++) {
        if (i % 2 !== 0) {
            if (s[i] === '0') startWith1++
            else startWith0++
        } else {
            if (s[i] === '1') startWith1++
            else startWith0++
        }
    }

    return Math.min(startWith0, startWith1)
};