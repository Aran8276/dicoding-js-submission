import assert from "node:assert";
import { sum } from "./index.js";
import { test } from "node:test";

test("testing penambahan dua bilangan", () => {
  // 2 + 2 = 4
  assert.strictEqual(sum(2, 2), 4);

  // 5 + 5 = 10
  assert.strictEqual(sum(5, 5), 10);

  // 5 + (-1) = 4
  assert.strictEqual(sum(5, -1), 4);

  // 5 + (-5) = 0
  assert.strictEqual(sum(5, -5), 0);

  // 5 + (-10) = -5
  assert.strictEqual(sum(5, -10), -5);

  // 1024 + (1024) = 2048
  assert.strictEqual(sum(1024, 1024), 2048);

  // 0 + 0 = 0
  assert.strictEqual(sum(0, 0), 0);
});
