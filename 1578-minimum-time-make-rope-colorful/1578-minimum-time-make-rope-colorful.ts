function minCost(colors: string, neededTime: number[]): number {
  let qty = 0
  let indexPointer = 0
  let timePointer = 0
  for (let i = 0; i < colors.length; i++) {
      if (i === 0) {
          indexPointer = i
          timePointer = neededTime[i]
      } else {
          if (colors[i] === colors[i-1]) {
              if (neededTime[i] > timePointer) {
                  qty += timePointer
                  indexPointer = i
                  timePointer = neededTime[i]
              } else {
                  qty += neededTime[i]
              }
          } else {
              indexPointer = i
              timePointer = neededTime[i]
          }
      }
  }
  return qty
};