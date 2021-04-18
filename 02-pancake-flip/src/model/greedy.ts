import { IMPOSSIBLE } from "../constants"
import type { TestCase, TestCaseResult } from "../types"

const isEveryoneHappy = (pancakeLine: boolean[]): boolean =>
  pancakeLine.every((value) => value)

/**
 * It mutates first input argument
 */
const flip = (
  pancakeLine: boolean[],
  startPosition: number,
  flipperSize: number
): void => {
  for (let i = startPosition; i < startPosition + flipperSize; i++) {
    pancakeLine[i] = !pancakeLine[i]
  }
}

const greedy = (testCase: TestCase): TestCaseResult => {
  const { pancakeLine, flipperSize } = testCase
  const potentialFlips = pancakeLine.length - flipperSize + 1

  let flipsCount = 0

  for (let i = 0; i < potentialFlips; i++) {
    if (isEveryoneHappy(pancakeLine)) return flipsCount
    if (!pancakeLine[i]) {
      flip(pancakeLine, i, flipperSize)
      flipsCount += 1
    }
  }

  if (isEveryoneHappy(pancakeLine)) return flipsCount

  return IMPOSSIBLE
}

export default greedy
