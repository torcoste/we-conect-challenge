import process from "./index"

it("pass sample test case", () => {
  const inputString = "3\n—--+-++- 3\n+++++ 4\n-+-+- 4"
  const expectedOutput = "Case #1: 3\nCase #2: 0\nCase #3: IMPOSSIBLE"
  expect(process(inputString)).toBe(expectedOutput)
})

it("pass custom test case with flipperSize = 2", () => {
  const inputString = "4\n-- 2\n-++- 2\n-+-+ 2\n---+ 2"
  const expectedOutput =
    "Case #1: 1\nCase #2: 3\nCase #3: 2\nCase #4: IMPOSSIBLE"
  expect(process(inputString)).toBe(expectedOutput)
})

it("pass custom test case with flipperSize = 3", () => {
  const inputString = "4\n--- 3\n-++- 3\n-+-+- 3\n-+-+-+- 3"
  const expectedOutput =
    "Case #1: 1\nCase #2: 2\nCase #3: 3\nCase #4: IMPOSSIBLE"
  expect(process(inputString)).toBe(expectedOutput)
})

it("pass custom test case with flipperSize = 4", () => {
  const inputString = "4\n---- 4\n--++-- 4\n-+-+-+- 4\n-+-+-+ 4"
  const expectedOutput =
    "Case #1: 1\nCase #2: 2\nCase #3: 4\nCase #4: IMPOSSIBLE"
  expect(process(inputString)).toBe(expectedOutput)
})
