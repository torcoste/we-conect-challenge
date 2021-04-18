import greedy from "./model/greedy"
import type { TestCase, TestCaseResult } from "./types"

const inputAdapter = (inputString: string): TestCase[] => {
  const [rawNumberOfTestCases, ...rawCases] = inputString.split("\n")

  const numberOfTestCases = parseInt(rawNumberOfTestCases)

  if (numberOfTestCases !== rawCases.length)
    throw new Error("Incorrect input: The number of test cases does not match")

  const cases = rawCases.map((testCaseLine) => {
    const [rawPancakeLine, rawFlipperSize] = testCaseLine.split(" ")
    return {
      pancakeLine: rawPancakeLine
        .split("")
        .map((pancakeItem) => pancakeItem === "+"),
      flipperSize: parseInt(rawFlipperSize),
    }
  })

  return cases
}

const calculateFlips = (cases: TestCase[]): TestCaseResult[] =>
  cases.map((testCase) => greedy(testCase))

const outputAdapter = (cases: TestCaseResult[]): string => {
  return cases.reduce(
    (acc, cur, curIndex, array) =>
      acc.concat(
        `Case #${curIndex + 1}: ${cur}${
          curIndex + 1 !== array.length ? "\n" : ""
        }`
      ),
    ""
  )
}

const process = (input: string) => {
  const cases = inputAdapter(input)
  const result = calculateFlips(cases)
  const output = outputAdapter(result)
  return output
}

export default process
