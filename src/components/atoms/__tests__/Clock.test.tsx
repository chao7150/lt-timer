import { formatMs } from "../Clock";

test("100000ms must be written as 01:40", () => {
  expect(formatMs(100000)).toBe("01:40");
});

test("less than 1000ms must be treated as 1sec", () => {
  expect(formatMs(999)).toBe("00:01");
});
