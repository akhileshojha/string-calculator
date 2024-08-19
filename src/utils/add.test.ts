import { add } from './add';

describe('add', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add("1")).toBe(1);
    });

    test('should return the sum of two comma-separated numbers', () => {
        expect(add("1,5")).toBe(6);
    });

    test('should handle newlines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('should support custom delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('should throw an exception for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    });

    test('should show all negative numbers in the exception message', () => {
        expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
    });
});