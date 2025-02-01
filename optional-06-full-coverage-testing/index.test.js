import assert from "node:assert";
import sum from "./index.js";
import { test } from "node:test";

test("testing penambahan dengan NaN", () => {
  assert.strictEqual(sum(NaN, NaN), NaN);
  assert.strictEqual(sum(NaN, 5), NaN);
});

test("testing penambahan dengan string bukan bilangan", () => {
  assert.strictEqual(sum(3, "a"), 0);
  assert.strictEqual(sum("a", 4.5), 0);
});

test("test penambahan infinity", () => {
  const a = Infinity;
  const b = -Infinity;

  // Test penambahan dengan Infinity
  assert.strictEqual(sum(a, 5), Infinity);

  // Test penambahan dengan -Infinity
  assert.strictEqual(sum(b, 3), 0);
});

test("testing penambahan nol", () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);

  // `!== "number"`
  assert.strictEqual(sum(0, "a"), 0);
  assert.strictEqual(sum("b", 0), 0);
});

test("testing penambahan bilangan negatif", () => {
  assert.strictEqual(sum(-2, 5), 0);
  assert.strictEqual(sum(3, -4), 0);
});

test("testing penambahan campuran float", () => {
  assert.strictEqual(sum(2.5, "3"), 0);
});

test("testing penambahan campuran Infinity", () => {
  const a = Infinity;
  const b = Infinity;

  // Test penambahan dengan kedua parameter Infinity
  assert.strictEqual(sum(a, b), Infinity);

  // Test penambahan dengan -Infinity dan Infinity
  assert.strictEqual(sum(-Infinity, Infinity), 0);
});
