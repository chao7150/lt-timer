import { formatMs } from "../Clock";

test("100000ms must be written as 01:40", () => {
  expect(formatMs(100000)).toBe("01:40");
});

test("60000ms must be written as 01:00", () => {
  expect(formatMs(60000)).toBe("01:00");
});

test("6000000ms must be written as 100:00", () => {
  expect(formatMs(6000000)).toBe("100:00");
});

test("[1000 * n - 999, 1000 * n] must be treated as n sec", () => {
  expect(formatMs(0)).toBe("00:00");
  expect(formatMs(1)).toBe("00:01");
  expect(formatMs(999)).toBe("00:01");
  expect(formatMs(1000)).toBe("00:01");
});
