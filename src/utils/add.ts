export function add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        const customDelimiter = numbers.substring(2, delimiterEndIndex);
        delimiter = new RegExp(customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const numberArray = numbers.split(delimiter);
    let sum = 0;
    let negativeNumbers: number[] = [];

    numberArray.forEach(num => {
        const parsedNumber = parseInt(num, 10);
        if (isNaN(parsedNumber)) return;
        if (parsedNumber < 0) negativeNumbers.push(parsedNumber);
        sum += parsedNumber;
    });

    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    return sum;
}