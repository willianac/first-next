import { vi } from "vitest"
import openNewClient from "../Client"

function sum(a: number, b: number) {
  return a + b
}

const mock = vi.fn().mockImplementation(openNewClient)

test("sum should return correct value", () => {
  mock()
  expect(sum(4,4)).toBe(8)
  expect(mock).toBeCalledTimes(1)
})
