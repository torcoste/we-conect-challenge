const IMPOSSIBLE = -1

interface TestCase {
  pancakeLine: boolean[]
  flipperSize: number
}

const inputAdapter = (inputString: string): [number, TestCase[]] => {
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

  return [numberOfTestCases, cases]
}

const calculateFlips = (
  numberOfTestCases: number,
  ...cases: TestCase[]
): number[] => {
  
  // write code here

  return [3, 0, IMPOSSIBLE]
}

const outputAdapter = (cases: number[]): string => {
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
  const [numberOfTestCases, cases] = inputAdapter(input)
  const result = calculateFlips(numberOfTestCases, ...cases)
  const output = outputAdapter(result)
  return output
}

export default process
