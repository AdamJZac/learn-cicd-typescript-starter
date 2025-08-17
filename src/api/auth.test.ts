import { IncomingHttpHeaders } from "http";
import { describe, expect, test } from "vitest";

const validHeader: IncomingHttpHeaders = { authorization: "apiKey123" };
const invalidHeader: IncomingHttpHeaders = {};

describe("header", () => {
  test("Valid header auth is defined", () => {
    expect(validHeader["authorization"]).toBeDefined();
  });
  test("Invalid header auth is not defined", () => {
    expect(invalidHeader["authorization"]).toBeUndefined();
  });

  test("Valid header has API key", () => {
    expect(validHeader["authorization"]?.length).toBeTruthy();
  });
  test("Invalid header has no API key", () => {
    expect(invalidHeader["authorization"]?.length).toBeFalsy();
  });
});
