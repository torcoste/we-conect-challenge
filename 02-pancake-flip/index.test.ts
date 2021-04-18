import process from "./index"

it("pass sample test case", () => {
  const inputString = "3\n—+-++- 3\n+++++ 4\n-+-+- 4"
  const expectedOutput = "Case #1: 3\nCase #2: 0\nCase #3: -1"
  expect(process(inputString)).toBe(expectedOutput)
})
