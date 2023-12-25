function numDecodings(s: string): number {
  let count1 = 0
  let count2 = 0
  let prevCount1 = 0

  for (let i = 0; i < s.length; i++) {
      if (i === 0) {
          if (s[i] !== '0') count1 = 1
          count2 = 0
      } else {
          prevCount1 = count1
          if (s[i] === '0') {
              count1 = 0
          } else {
              if (i-1 !== 0) count1 = count1 + count2
          }
          count2 = Number(s.slice(i-1, i+1)) <= 26 ? prevCount1 : 0
      }
  }

  return count1 + count2
};